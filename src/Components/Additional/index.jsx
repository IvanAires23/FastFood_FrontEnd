import { useEffect } from 'react';
import { Additional, CheckAdd, Circle } from './styled';

export default function OptionsAdditional({
  adds, selectedOptions, setSelectedOptions, setTotalAdds,
}) {
  useEffect(() => {
    const priceAdds = [];

    for (let i = 0; i < adds.length; i++) {
      if (selectedOptions.includes(adds[i].name)) {
        priceAdds.push(adds[i]);
      }
    }

    setTotalAdds(priceAdds);
  }, [selectedOptions]);

  function handleOptionClick(option) {
    if (selectedOptions.includes(option.name)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option.name));
    } else {
      setSelectedOptions([...selectedOptions, option.name]);
    }
  }

  return (
    <Additional>
      <h2>Adicionais</h2>
      <p>Selecione os ingredientes a mais que voce quer adicionar no seu lanche</p>
      {adds.map((a, i) => (
        <div key={i}>
          <div>
            <h3>{a.name}</h3>
            <p>{a.qnt}</p>
          </div>
          <CheckAdd>
            <h3>{(a.price / 100).toFixed(2)}</h3>
            <Circle
              onClick={() => handleOptionClick(a)}
              selected={selectedOptions.includes(a.name)}
            />
          </CheckAdd>
        </div>
      ))}
    </Additional>
  );
}
