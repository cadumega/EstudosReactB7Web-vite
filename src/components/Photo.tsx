import { ReactNode } from 'react' ;

type Props = {
    url?: string;
    legend: string;
    children: ReactNode  ;
}


export const Photo = ({legend, children}: Props) => {
    return (
        <>
            {children}
           <p> {legend} </p>
        </>
    );
}

// Receber as props, type Props q ira receber url e legend q sao strings. Na minha var irei receber essas props. Lembrar de repassar a props no atributo img