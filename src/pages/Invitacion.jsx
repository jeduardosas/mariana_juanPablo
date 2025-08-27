import Card from '../components/molecules/card/Card.jsx';
import Imagen from '../components/atoms/imagen/Imagen.jsx';
import getData from '../../data.js';
import '../styles/invitacion.css';

const Invitacion = () => {
  const data = getData('boda');
  console.log(data);
  return (
  <>
    <div className='contenedor'>
    <Card ajustes = {{ancho:'85%',variante:'papel',clase:'card-monograma'}}>
      <div className="card-monograma-img">
        <Imagen ajustes={{imagen:'./img/monograma.png',ancho:'30%'}} />
      </div>
      <div className="card-monograma-texto">
        <p>Tenemos el honor de invitarte a celebrar nuestra boda</p>
      </div>
      <div className="card-monograma-nombres">
        <h1>{data.nombreNovia}</h1>
        <p>&</p>
        <h1>{data.nombreNovio}</h1>
      </div>
    </Card>
    
    <Card ajustes={{ancho:'90%',variante:'papel', clase:'card-papas'}}>
        <p>En compañia de nuestros padres</p>
        <div className='card-papas-papas'>
          <div className="card-papas-nombres">
            <h3>{data.padresNovia.mama}</h3>
            <h3>{data.padresNovia.papa}</h3>
          </div>
          <div className="card-papas-nombres">
            <h3>{data.padresNovio.mama}</h3>
            <h3>{data.padresNovio.papa}</h3>
          </div>
        </div>
    </Card>
    
    </div>
  </>
  )
}

export default Invitacion