import ReactDOM from 'react-dom';
import Topo from './topo';
import Conteudo from './conteudo';
import BarraInferior from './barrainferior';

function Instagram (){
    return (
        <div className='site'>
            <Topo />
			<Conteudo />
            <BarraInferior />
        </div>
    );
}

ReactDOM.render(<Instagram />, document.querySelector(".root"));