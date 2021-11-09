import { Header } from './components/Header'
import { Photo } from './components/Photo';

const App = () => {
    return (
        <div>
            <Header title="Este é um exemplo" />
            <Header title="Exemplo 2" />
            <Header />

            Olá Mundo

            <Photo legend="Google">
                <img src="http://www.google.com.br/google.jpg" alt="" />
            </Photo>
        </div>
    );
}

export default App;

// Quando tenho um bloco de código grande e quero dar manutenção separada, crio um componente para ele. Ou para ser utilizado em vários locais, como exibir avisos específicos. Crio um componente e sempre que eu quiser exibir esse componente de aviso já esta criado.
// 200 componentes, imagina a loucura que seria se tivesse em um único arquivo.
// Criar pasta components