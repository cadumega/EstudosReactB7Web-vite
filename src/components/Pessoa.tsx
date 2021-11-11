type Props = {
    data: {
        name: string;
        age: number;
    }
}


export const Pessoa = ({data}: Props) => {
    return (
        <li>
            {data.name} - {data.age} anos.
        </li>
    )
}

// Se eu tivesse um componente de nome e idade para fazer essa exibição ? Criando componente Pessoa.tsx
// Recebo uma Prop só com essas informações
// Passei a prop para exibir os dados da pessoa.