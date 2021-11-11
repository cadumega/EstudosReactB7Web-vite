
type Props = {
    //title: string;    // Especifiquei como uma prop obrigatoria
    title?: string;    //opcional a prop
}

export const Header = ({title}: Props) => {
    return (
        <header>
            <h1>{title}</h1>
            <hr />
        </header>
    )
}

// export Header;

//Declarando o tipo da Props e especificando string por ser typescript.
// Aqui  nesse arquivo do componente passo a prop e no App.tsx uso a prop.
