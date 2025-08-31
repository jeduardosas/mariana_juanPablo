import './botonStyle.css';

/*asi se renderiza un boton
<Boton 
    ajustes={{
      texto:'click aquí',
      estilos:{
        colorFondo:'Secundario',
        forma:{arribaIzquierda:true,
              arribaDerecha:false,
              abajoIzquierda:false,
              abajoDerecha:true},
        sombra:false,
        textBold:true,
        textColor:'Fondo'
      }
    }} /> */
const Boton = ({ajustes}) => {
  
  const { texto,estilos, link } = ajustes || {};
  const { colorFondo, forma, sombra, textBold, textColor } = estilos || {};
  const { arribaIzquierda, arribaDerecha, abajoIzquierda, abajoDerecha } = forma || {};
  console.log('ESTO ES EL LINK',link)
  const clases = [
    'atom-boton',
    arribaIzquierda ? 'redondoArribaIzquierda' : '',
    arribaDerecha ? 'redondoArribaDerecha' : '',
    abajoIzquierda ? 'redondoAbajoIzquierda' : '',
    abajoDerecha ? 'redondoAbajoDerecha' : '',
    sombra ? 'sombra' : '',
    textBold ? 'textBold' : '',
    textColor ? `text${textColor}` : ''
  ].join(' ')
  return (
    <a 
      href={link}
      style={{backgroundColor:`${colorFondo}`}}
      className={clases}
    >{texto}</a>
  )
}

export default Boton