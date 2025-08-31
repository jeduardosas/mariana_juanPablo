import { useState } from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import Modal from "react-modal";
import Reproductor from '../components/molecules/reproductor/Reproductor.jsx';
import Card from '../components/molecules/card/Card.jsx';
import AnimarTarjeta from '../components/molecules/animarTarjeta/AnimarTarjeta.jsx'
import Contador from '../components/molecules/contador/Contador.jsx';
import TimeLine from '../components/molecules/timeline/TimeLine.jsx';
import Detalles from '../components/molecules/detalles/Detalles.jsx';
import Imagen from '../components/atoms/imagen/Imagen.jsx';
import Banner from '../components/molecules/banner/Banner.jsx';
import Icono from '../components/atoms/iconos/Icono.jsx';
import Boton from '../components/atoms/button/Boton.jsx';
import Footer from '../components/molecules/footer/Footer.jsx';
import {Iglesia, Recepcion, Novia, Novio} from '../components/atoms/iconos/Index.jsx';
import getData from '../../data.js';
import obtnerTextoConfirmacion from '../functions/obtenerTextoConfirmacion.js'
import '../styles/modal.css';
import '../styles/invitacion.css';

const Invitacion = () => {
  const data = getData('boda');
  

  const son = './music/song.mp3'

  const [play,setPlay] = useState(false); //estado para manejar la reproduccion del audio
  const [modalIsOpen, setModalIsopen] = useState(true);//estado para manejar el modal

  // VALIDACIÓN DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pasesParam = params.get("pases");

  const pases = Number(pasesParam); // lo convertimos a número
  let txt1 = "Lugar";
  let txt2 = "reservado";

  // Si pasesParam es null, no es un número, no es entero o está fuera de rango -> redirigir
  if (
    !pasesParam ||                // vacío o null
    Number.isNaN(pases) ||        // no es un número
    !Number.isInteger(pases) ||   // no es un entero
    pases < 1 || pases > 10       // fuera de rango
  ) {
    return <Navigate to="/notfound" />;
  }

  if (pases > 1) {
    txt1 = "Lugares";
    txt2 = "reservados";
  }

  //funcion para reproduccion de la musica cuando el modal se acepte
  const handlePlay = ()=>{
    setPlay(true);
    setModalIsopen(false)
  }
  return (
  <>
    
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={()=>setModalIsopen(false)}
      style={{
        content:{
          width:'80%',
          top:'50%',
          left:'50%',
          right:'auto',
          bottom:'auto',
          transform:'translate(-50%, -50%)',
          textAlign:'center',
          border:'none',
          boxShadow:'10px 10px 10px #bdbdbd',
          backgroundColor:'var(--back-color)',
        }
      }}
      contentLabel="Confirmacion de Reproducción"
      ariaHideApp={false} //necesario para evitar adverterncias en pruebas yu desarrollo
      shouldCloseOnOverlayClick={false}
    >
      <div className = 'modal-imagen-contenedor'>
        <Imagen ajustes={{imagen:'./img/modal.webp',ancho:'70%'}} />
      </div>
      <p className="modal-content">Para una mejor experiencia, por favor acepta la reproducción automática.</p>  
      <button className="modal-button" onClick={handlePlay}>Aceptar</button>
      
    </Modal>

    {
      
      play && (
        <>
          <Reproductor song={son} />

          <div className="header-contenedor">
            
          </div>
          <div className='contenedor'>
            <AnimarTarjeta ajustes = {{ancho:'85%',variante:'papel',clase:'card-monograma'}}>
              <div className="card-monograma-img">
                <Imagen ajustes={{imagen:'./img/monograma.webp',ancho:'30%'}} />
              </div>
        
              <div className='card-monograma-img-nombres'>
                <Imagen ajustes={{imagen:'./img/nombres.webp', ancho:'100%'}}  />
              </div>

              <div className="card-monograma-texto">
                <p>Tenemos el honor de invitarles a celebrar el inicio de nuestra vida juntos.</p>
              </div>

              <div className="card-monograma-fecha">
                <h3>{data.fechaDia}</h3>
                <span>●</span>
                <h3>{data.fechaMes}</h3>
                <span>●</span>
                <h3>{data.fechaYear}</h3>
              </div>
            </AnimarTarjeta>

          </div>
          
          <Banner ajustes={{imagen:'./img/foto1.webp', anchoImagen:'100%',anchoContenedor:'100%'}} />
          <div className="contenedor">

            <AnimarTarjeta ajustes={{ancho:'90%',variante:'papel', clase:'card-papas'}}>
                <p>En compañia de Dios y con las bendición de nuestros padres:</p>

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
            </AnimarTarjeta>

          </div>

          <Banner ajustes={{imagen:'./img/ilustracion.webp', anchoImagen:'90%', anchoContenedor:'100%'}} />

          <div className="frase-contenedor">
            <p>"Y ahora permanecen la fé, la esperanza y el amor, estos tres; pero el mayor de ellos es el Amor."</p>
            <span>-1 Corintios 13:13</span>
          </div>

          <div className="contenedor">
            <AnimarTarjeta ajustes={{ancho:'90%', variante:'papel', clase:'card-horarios'}}>
              <div>
                <p className='card-horarios-titulo'>Ceremonia Religiosa</p>
                <div className='card-horarios-item'>
                  <Icono IconoSVG={Iglesia} ajustes ={{color:'#000',ancho:'50px',alto:'50px'}}/>
                  <h2>{data.religiosa.lugar}</h2>
                </div>
                <div className='card-horarios-direccion'>
                  <p>{data.religiosa.direccion}, {data.religiosa.direccionCol}</p>
                  <p>{data.religiosa.direccionCd} </p>
                  <h3>{data.religiosa.hora}:{data.religiosa.minutos} Hrs.</h3>
                </div>
                <div className='card-horarios-boton'>
                  <Boton ajustes={
                    { texto:'Cómo llegar',
                      link:`${data.religiosa.ubicacion}`, 
                      estilos:{
                        colorFondo:'var(--colorFondo)',
                        forma:{
                          
                          arribaIzquierda:true,
                          arribaDerecha:true,
                          abajoIzquierda:true,
                          abajoDerecha:true
                        }
                      }
                    }
                  } 
                  />
                </div>
              </div> {/* <------- */}


              <div style={{marginTop:'50px'}}>
                <p className='card-horarios-titulo'>Recepción</p>
                <div className='card-horarios-item'>
                  <Icono IconoSVG={Recepcion} ajustes ={{color:'#000',ancho:'50px',alto:'50px'}}/>
                  <h2>{data.recepcion.lugar}</h2>
                </div>
                <div className='card-horarios-direccion'>
                  <p>{data.recepcion.direccion}, {data.recepcion.direccionCol}</p>
                  <p>{data.recepcion.direccionCd} </p>
                  <h3>{data.recepcion.hora}:{data.recepcion.minutos} Hrs.</h3>
                </div>
                <div className='card-horarios-boton'>
                  <Boton ajustes={
                    { texto:'Cómo llegar',
                      link:`${data.recepcion.ubicacion}`, 
                      estilos:{
                        colorFondo:'var(--colorFondo)',
                        forma:{
                          
                          arribaIzquierda:true,
                          arribaDerecha:true,
                          abajoIzquierda:true,
                          abajoDerecha:true
                        }
                      }
                    }
                  } 
                  />
                </div>
              </div> {/* <------- */}
              
            </AnimarTarjeta>
          </div>

          <Contador 
            titulo={'¡prepárate!'}
            subtitulo={'nos vemos dentro de:'}
            fechaDia={data.fechaDia} 
            fechaMes={data.fechaMes}
            fechaYear={data.fechaYear}
            hora={data.religiosa.hora}
            minutos={data.religiosa.minutos}
          />

          <Banner ajustes={{imagen:'./img/foto2.webp', anchoImagen:'100%',anchoContenedor:'100%'}} />
          <div className="contenedor">
            <Card ajustes={{ancho:'90%', variante:'papel', clase:'card-timeline'}}>
              <TimeLine 
                timeLine={data.timeLine}
                tituloImagen={true}
                titulo={'./img/itinerario.webp'}
                anchoImagen={'50%'}
                eventFontFamily={'var(--fuenteSecundaria'}
                timeFontFamily={'var(--fuenteSecundaria)'}
              />
            </Card>
          </div>

          <Banner ajustes={{imagen:'./img/foto3.webp',anchoImagen:'100%',anchoContenedor:'100%'}} />

          <div className="contenedor">
            <Detalles />
          </div>
          <div className="lugares-contenedor">
            <h3>Hemos Reservado:</h3>
            <span>{pases}</span>
            <p>{txt1} en tu honor</p>
          </div>

          <div className="contenedor">
            <AnimarTarjeta ajustes={{ancho:'90%', variante:'papel', clase:'card-confirmacion'}}>
              <div className="card-confirmacion-contenedor">
                <h2 className='card-confirmacion-titulo'>Confirmación de Asistencia</h2>
                <p className='card-cofirmacin-texto'>Tu compañia es lo más importante para nosotros.Agradecemos confirmar su asistencia para compartir juntos este día tan especial.</p>
                <div className="card-confirmacion-botones">
                  <div className='card-confirmacion-item'>
                    <div>
                      <Icono IconoSVG={Novia} ajustes={{ancho:'50px', alto:'35px', color:'#acacac'}} /> 
                      <p>{data.nombreNovia}</p>
                    </div>
                    <Boton ajustes={
                      {
                        texto:'Confirmar',
                        link:obtnerTextoConfirmacion('boda', data.nombreNovio, data.nombreNovia,data.confirmacion.novio),
                        estilos:{
                          colorFondo:'var(--colorFondo)',
                          forma:{
                            arribaIzquierda:true,
                            arribaDerecha:true,
                            abajoIzquierda:true,
                            abajoDerecha:true
                          }
                        }
                      }
                    } />
                  </div>

                  <div className='card-confirmacion-item'>
                    <div>
                      <Icono IconoSVG={Novio} ajustes={{ancho:'30px', alto:'30px', color:'#acacac'}} /> 
                      <p>{data.nombreNovio}</p>
                    </div>
                    <Boton ajustes={
                      {
                        texto:'Confirmar',
                        link:obtnerTextoConfirmacion('boda', data.nombreNovio, data.nombreNovia,data.confirmacion.novio),
                        estilos:{
                          colorFondo:'var(--colorFondo)',
                          forma:{
                            arribaIzquierda:true,
                            arribaDerecha:true,
                            abajoIzquierda:true,
                            abajoDerecha:true
                          }
                        }
                      }
                    } />
                  </div>
                </div>
              </div>
            </AnimarTarjeta>
          </div>
          <Banner ajustes={{imagen:'./img/foto4.webp', anchoImagen:'100%',anchoContenedor:'100%'}} />
          <div className='contenedor'>
            <AnimarTarjeta 
              ajustes={
                {
                  ancho:'90%', 
                  variante:'papel', 
                  clase:'card-hospedaje'
                }
              }>
              <h2 className='card-hospedaje-titulo'>Sugerencia de Hospedaje</h2>
              
                <p className='card-hospedaje-texto'>Con el deseo de facilitar su estancia ponemos a su disposición un código de descuento en <span>Hotel Grand Plaza.</span></p> 
                <p className='card-hospedaje-texto'>Al realizar su reservación utilize el codigo:</p>
                <p className="card-hospedaje-texto"><span>Mariana & Juan Pablo</span></p>
                <p className='card-hospedaje-texto'>para obtener una tarifa preferencial. </p>
              <Boton ajustes={{
                texto:'Ver Ubicación',
                link:'https://maps.app.goo.gl/TdzcfGT8mvkLdB468',
                estilos:{
                  colorFondo:'var(--colorFondo)',
                  forma:{
                    arribaIzquierda:true,
                    arribaDerecha:true,
                    abajoIzquierda:true,
                    abajoDerecha:true
                  }
                }
              }} />
            </AnimarTarjeta>
          </div>
          
          <Footer />
        </>
      )
    }
  </>
  )
}

export default Invitacion