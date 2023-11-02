/* eslint-disable react/jsx-no-useless-fragment */
import { AiOutlineClose } from 'react-icons/ai';
import DATABASE_URL from '../../database';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  Box, Cancel, Infos, Obs, ReadyOrCancel,
} from './styled';

export default function Ready({ ready, requests }) {
  async function deleteKitchen(food) {
    for (let i = 0; i < requests.length; i++) {
      if (food.id === requests[i].foodId) {
        await axios.post(`${DATABASE_URL}/kitchen/delete`, { id: requests[i].id })
          .then(() => window.location.reload())
          .catch((err) => toast.error(err.response.data.message));
        return;
      }
    }
  }

  return (
    <>
      {ready.length === 0 || requests.length === 0 ? 'Sem pedidos prontos no momento' : ready.map((r, i) => (
        <Box key={i}>
          <Infos>
            <img src={r.image} />
            <div>
              <h1>{`${r.code} - ${requests[i].nameUser}`}</h1>
              <p>{`${requests[i].quant}x ${r.name}`}</p>
            </div>
            <ReadyOrCancel>
              <Cancel onClick={() => deleteKitchen(r)}><AiOutlineClose /></Cancel>
            </ReadyOrCancel>
          </Infos>
          {requests[i].observation && (
          <Obs>
            <h2>Observações</h2>
            <textarea placeholder={requests[i].observation} disabled />
          </Obs>
          ) }
        </Box>
      ))}
    </>
  );
}
