import { Pessoa } from "./components/Pessoa"

const App = () => {
    let list = [
        {name: 'Carlos', age:30},
        {name: 'João', age:40},
        {name: 'Pedro', age:50},
        {name: 'Maria', age:10},
        {name: 'Carol', age:25},
    ]

    return (
        <div>
            <h2> Lista de presença</h2>
            <ul>
                {list.map((item, index) => (
                    <Pessoa key={index} data= {item}/>
                ))}
            </ul>
        </div>
    )

}

export default App;

// Coloco meu componente pessoa para repetir as informações, só preciso passar data e o meu objeto item.
// Atentar ao erro de key prop. Preciso colocar a prop key com index, mesmo que não receba a prop, pois ela serve para o map. E não ao compoenente.
