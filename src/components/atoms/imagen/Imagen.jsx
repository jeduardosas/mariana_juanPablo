
import './imagenStyle.css'

/*
Asi se renderiza una imagen
<Imagen 
      ajustes = {{
        imagen:'./img/2.webp',
        ancho:'100%',
        alto:''
      }}
  />
 */

const Imagen = ({ajustes}) => {
  const { imagen, ancho, alto } = ajustes || {}

  const nombreImagen = (img)=>{
    const nombre = img.split('/').pop().split('.')[0];
    return nombre

  }
  return (
      <img 
        src={imagen} 
        alt={`${nombreImagen(imagen)}-img`} 
        style={{
          width:ancho || '100%',
          height:alto || 'auto'
        }}
      />
  )
}

export default Imagen