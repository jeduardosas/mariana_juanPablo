import './cardStyle.css'

const Card = ({ tipo, ajustes }) => {
  const { type, titulo, cuerpo, final, imagen } = tipo || {};
  const { ancho, variante } = ajustes || {};

  return (
    <div 
      className={`card card-${type} ${variante ? `card-${variante}` : ''}`} 
      style={{ width: ancho || '100%' }}
    >
      {titulo && (
        <div className="card-titulo">
          {type === 'imagen' && imagen && <img src={imagen} alt={titulo} />}
          <p>{titulo}</p>
        </div>
      )}

      {cuerpo && (
        <div className="card-cuerpo">
          <p>{cuerpo}</p>
        </div>
      )}

      {final && (
        <div className="card-final">
          <p>{final}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
