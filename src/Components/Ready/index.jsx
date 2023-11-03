/* eslint-disable react/jsx-no-useless-fragment */
import { AiOutlineClose } from 'react-icons/ai';
import DATABASE_URL from '../../database';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  Box, Cancel, Infos, Obs, ReadyOrCancel,
} from './styled';

export default function Ready({ setReload, ready }) {
  async function deleteKitchen(id) {
    try {
      await axios.post(`${DATABASE_URL}/kitchen/delete`, { id });
      toast.success('Pedido deletado com sucesso');
      setReload(true);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <>
      {ready.length === 0 ? 'Sem pedidos prontos no momento' : ready.map((r, i) => (
        <Box key={i}>
          <Infos>
            <img src={r.Food.image} />
            <div>
              <h1>{`${r.Food.code} - ${r.nameUser}`}</h1>
              <p>{`${r.quant}x ${r.Food.name}`}</p>
            </div>
            <ReadyOrCancel>
              <Cancel onClick={() => deleteKitchen(r.id)}><AiOutlineClose /></Cancel>
            </ReadyOrCancel>
          </Infos>
          { r.observation && (
          <Obs>
            <h2>Observações</h2>
            <textarea placeholder={r.observation} disabled />
          </Obs>
          )}
        </Box>
      ))}
    </>
  );
}
