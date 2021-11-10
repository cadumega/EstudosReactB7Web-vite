import { useState } from 'react';

const App = () => {
    const [n, setN] = useState(0);

        const handleMinus = () => {
            setN (n -1)
        }


        const handleMore = () => {
            setN (n +1)
        }

    return (
        <div>
            <button onClick= {handleMinus}> - </button>
            <div>{n}</div>
            <button onClick= {handleMore}> + </button>
        </div>
    )
}

export default App;

// Iremos criar um contador com incremento de +1 toda vez que clico.
// Iremos fazer um botão de +1 e de -1.
// Somente a div que é modificada.