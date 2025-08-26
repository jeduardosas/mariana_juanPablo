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
  const { texto,estilos } = ajustes || {};
  const { colorFondo, forma, sombra, textBold, textColor } = estilos || {};
  const { arribaIzquierda, arribaDerecha, abajoIzquierda, abajoDerecha } = forma || {};

  const clases = [
    'atom-boton',
    colorFondo ? `bg${colorFondo}` : '',
    arribaIzquierda ? 'redondoArribaIzquierda' : '',
    arribaDerecha ? 'redondoArribaDerecha' : '',
    abajoIzquierda ? 'redondoAbajoIzquierda' : '',
    abajoDerecha ? 'redondoAbajoDerecha' : '',
    sombra ? 'sombra' : '',
    textBold ? 'textBold' : '',
    textColor ? `text${textColor}` : ''
  ].join(' ')
  return (
    <button className={clases}>{ texto }</button>
  )
}

export default Boton