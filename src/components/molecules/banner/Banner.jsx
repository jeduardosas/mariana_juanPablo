import  Imagen from '../../atoms/imagen/Imagen.jsx'

const Banner = ({ajustes}) => {
  const {imagen,anchoImagen, altoImagen, anchoContenedor, } = ajustes || {}
  return (
    <div style={{width:{anchoContenedor},display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Imagen ajustes={{imagen, ancho:anchoImagen, alto:altoImagen}} />
    </div>
  )
}

export default Banner