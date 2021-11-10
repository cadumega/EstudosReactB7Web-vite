import React, { useState } from 'react';

const App = () => {
    const [name, setName] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleInput2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSobrenome(event.target.value);
    }
    const handleInput3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdade(event.target.value);
    }

    return (
        <div>
            Nome:
            <input type="text" value={name} onChange={handleInput} />
            <br />
            Sobrenome:
            <input type="text" value={sobrenome} onChange={handleInput2} />
            <br />
            Idade:
            <input type="text" value={idade} onChange={handleInput3} />
            <hr />

            Olá {name} {sobrenome}, tudo bem?
            <br />
            Você tem {idade} anos.
        </div>
    )
}

export default App;

// Todo sistema irá usar algum tipo de input, no qual é um html em que o usuário irá poder inserir algum dado.
// O js não permite alteração pois esta associado ao state. Preciso criar um evento e a função.
// Preciso importar React por fora o type para input é React.changeEvent<HTMLInputElement , type para change event.
// Ação que modifica várias outras alterações no meu sistema, por exemplo um cadastro do cliente.

// Meu state esta armazenando o conteúdo de armazenagem, criamos um formulário com uma state específica. O valor que você digita esta sendo salvo, em que poderá utilizar como quiser com esses valores.
// Associamos duplamente o state ao value, e associamos para alterar o valor.