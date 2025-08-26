import Card from '../components/molecules/card/Card.jsx';

const Invitacion = () => {

  return (
  <div className='contenedor'>
  
   <Card 
    tipo = {{
        type:'imagen',
        titulo:`Mariana & Juan Pablo`,
        cuerpo:'En compañia de Dios y de nuestros padres',
        final:'',
        imagen:'./img/monograma.png'
        }
      }
    ajustes = {{
      ancho:'80%',
      variante:'papel'
    }} 
    />
   
   
  </div>
  )
}

export default Invitacion