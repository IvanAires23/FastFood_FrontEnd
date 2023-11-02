/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import { Header, Li } from './styled';

export default function Top({ selected, setSelected }) {
  const navigate = useNavigate();

  const pages = [{ name: 'Pedidos' }, { name: 'Cozinha' }, { name: 'Retirada' }];

  function selectPage(page) {
    setSelected(page);
    if (page === 'Pedidos') {
      navigate('/');
    } else if (page === 'Cozinha') {
      navigate('/kitchen');
    } else if (page === 'Retirada') {
      navigate('/delivery');
    }
  }

  return (
    <Header>
      <h2>FastFood</h2>
      <ul>
        {pages.map((p, i) => (
          <Li
            selected={selected === p.name}
            onClick={() => selectPage(p.name)}
            key={i}
          >
            {p.name}

          </Li>
        ))}
      </ul>
    </Header>
  );
}
