import './cardStyle.css'

const Card = ({ tipo, ajustes, children }) => {
  const { type, titulo, cuerpo, final, imagen } = tipo || {};
  const { ancho, variante } = ajustes || {};

  return (
    <div 
      className={`card  ${variante ? `card-${variante}` : ''}`} 
      style={{ width: ancho || '100%' }}
    >
      {children}
    </div>
  );
};

export default Card;
