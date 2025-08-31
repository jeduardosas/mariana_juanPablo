import { useState } from 'react';
import Card from '../card/Card.jsx';
import Imagen from '../../atoms/imagen/Imagen.jsx';
import './detalles.css';

const Detalles = ()=>{
  const [abierto, setAbierto] = useState(false);

  const toggleDetalles = ()=>setAbierto(!abierto);

  return(
    <div className="detalles-container">
      <Card ajustes={{ variante: "papel", ancho: "90%", clase:'card-detalles' }}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginBottom:'30px'}}>
          <Imagen ajustes={{imagen:'./img/detalles.webp', ancho:'50%'}} />
        </div>
        <button 
          className="detalles-boton" 
          onClick={toggleDetalles}
        >
          {abierto ? "Ver menos ↑" : "Ver más ↓"}
        </button>

        <div className={`detalles-contenido ${abierto ? "mostrar" : ""}`}>
          <ul>
            <li className ='detalles-item'>
              <h3>Codigo de Vestimenta</h3>
              <p>Formal</p>
            </li>
            <li className ='detalles-item'>
              <h3>Sugerencia de regalos</h3>
              <p>El regalo más valioso será tu presencia, pero si deseas obsequiarnos algo especial, agradeceremos tu detalle sea en efectivo.</p>
            </li>
            <li className ='detalles-item'>
              <h3>No niños</h3>
              <p>Con todo nuestro cariño, les compartimos que nuestra boda será una velada pensada para el disfrute de los adultos. Agradecemos su comprensión y su amor en este día tan especial.</p>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default Detalles