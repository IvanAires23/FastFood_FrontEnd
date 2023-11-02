/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/react-in-jsx-scope */
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import DATABASE_URL from '../../database';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import {
  Box, Cancel, Infos, Obs, Ready, ReadyOrCancel,
} from './styled';

export default function Preparing({ preparing, requests }) {
  async function updateKitchen(food) {
    for (let i = 0; i < requests.length; i++) {
      if (food.id === requests[i].foodId) {
        await axios.post(`${DATABASE_URL}/kitchen/ready`, { id: requests[i].id })
          .then(() => window.location.reload())
          .catch((err) => toast.error(err.response.data.message));
        return;
      }
    }
  }

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
      {preparing.length === 0 || requests.length === 0 ? 'Sem pedidos em preparação no momento' : preparing.map((p, i) => (
        <Box key={i}>
          <Infos>
            <img src={p.image} />
            <div>
              <h1>{`${p.code} - ${requests[i].nameUser}`}</h1>
              <p>{`${requests[i].quant}x ${p.name}`}</p>
            </div>

            <ReadyOrCancel>
              <Cancel type="button" onClick={() => deleteKitchen(p)}><AiOutlineClose /></Cancel>
              <Ready onClick={() => updateKitchen(p)}><AiOutlineCheck /></Ready>
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
