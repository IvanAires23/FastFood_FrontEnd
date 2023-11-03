/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import DATABASE_URL from '../../database';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import {
  Box, Cancel, Infos, Obs, Ready, ReadyOrCancel,
} from './styled';

export default function Preparing({ setReload, preparing }) {
  async function updateKitchen(id) {
    try {
      await axios.post(`${DATABASE_URL}/kitchen/ready`, { id });
      toast.success('Pedido atualizado com sucesso');
      setReload(true);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  async function deleteKitchen(id) {
    try {
      await axios.post(`${DATABASE_URL}/kitchen/delete`, { id });
      toast.success('Pedido atualizado com sucesso');
      setReload(true);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <>
      {preparing.length === 0 ? 'Sem pedidos em preparação no momento' : preparing.map((p, i) => (
        <Box key={i}>
          <Infos>
            <img src={p.Food.image} />
            <div>
              <h1>{`${p.Food.code} - ${p.nameUser}`}</h1>
              <p>{`${p.quant}x ${p.Food.name}`}</p>
            </div>

            <ReadyOrCancel>
              <Cancel type="button" onClick={() => deleteKitchen(p.id)}><AiOutlineClose /></Cancel>
              <Ready onClick={() => updateKitchen(p.id)}><AiOutlineCheck /></Ready>
            </ReadyOrCancel>
          </Infos>
          { p.observation
            ? (
              <Obs>
                <h2>Observações</h2>
                <textarea placeholder={p.observation} disabled />
              </Obs>
            )
            : '' }

        </Box>
      ))}
    </>
  );
}
