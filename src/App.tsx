import {useState } from 'react';

const App = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow( !show )
        
        // if(show) {
        //     setShow(false);
        // } else {
        //     setShow(true);
        // }
    }

    return (
        <div>
            <button onClick = {handleClick}> {show ? 'Ocultar' : 'Mostrar'} </button>

            {show && 
                <div>
                    Blabla texto ipsum illori....
                </div>
            }
        </div>
    )
}

export default App;


// Forma mais fácil: 
// Set show inicia como falso.. o meu state.
// Texto ser exibido se minha state estiver como true, preciso criar uma expressão que é uma verificação caso seja positivo.
// Se show estiver true elem ostra blabla...
// No btn irei colocar um handleClick de evento, preciso criar a fç anônima handleClick e irei colocar um setShow true.
// Para exibir o blabla não fiz uma ação direta, eu criei um intermediário que é show , em que as duas coisas mexeram com ela. Quando show estiver true mostrar o blabla.

// Toogle - executa uma vez faz algo, quando executo retorna ao estado de origem. Como fazer?
// Usar condicional if(show) else... consigo resumir em uma linha invertida com setShow( !show )

// Mudar o texto do botão. Condicional ternário junto com a var state.
// Quando se tem uma condição faz da 1ª maneira, se for toogle faz 2ª a condicional com ternário.