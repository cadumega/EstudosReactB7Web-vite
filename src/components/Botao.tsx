type Props = {
    text: string;
    clickFn: (txt: string) => void;
}

export const Botao = ({ text , clickFn}: Props) => {

    const handleClick = () => {
        clickFn("FRASE 2 TESTE.")
    }

    return (
        <button onClick={handleClick}> {text} </button>
    )
}

//ex. 3 - Enviar pro parametro de fç para enviar uma frase do meu element filho para pai.
// Estou fazendo isso para não executar a fç handleClick sem nada. E o handleClick executa o clickFn
// A fç do clickFn recebe um parametro (txt: string)
// Recebo a frase no arq. App.tsx na fç botaoEventAction

