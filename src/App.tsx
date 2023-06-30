import ResetGlobal, { Container as ContainerDaPagina } from './styles';
import {Provider} from 'react-redux';
import store from './store';
import Header from './containers/Header';
import Lista from './containers/Lista';
import Adicionar from './containers/Adicionar';

function App() {
  return (
    <Provider store={store}>
    <ResetGlobal />
    <ContainerDaPagina>
    <Header />
    <Adicionar />
    <Lista />
    </ContainerDaPagina>
    </Provider>
  );
}

export default App;
