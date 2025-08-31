import Imagen from '../../atoms/imagen/Imagen';
import './footer.css';

const Footer = ( )=>{
  const year = new Date().getFullYear();
  return(
    <footer className="footer">
      <Imagen ajustes={{imagen:'./img/logo_footer.webp', ancho:'60px', clase:'footer-logo'}} />
      <p className='footer-text'>Hecha con cariño <span>Monadas Invitaciones</span></p>

      <div className="footer-line"></div>

      <span className="footer-copy">
        Todos los Derechos Reservados {year}
      </span>
    </footer>
  )
}

export default Footer