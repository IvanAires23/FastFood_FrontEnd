/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export default function Purchase({ dataFoods }){
    return(
        <>
            {dataFoods.map((d, i) => (
                <div key={i}>
                    <div>
                        <h3>{d.current + 'x ' + d.name}</h3>
                        <h3>{'R$' + (d.price / 100).toFixed(2)}</h3>
                    </div>
                    {d.totalAdds.map((a, i) => (
                        <div key={i}>
                            <p>{a.name}</p>
                            <p>{'R$' + (a.price / 100).toFixed(2)}</p>
                        </div>
                    )) }
                </div>
            ))}
        </>
    );
}