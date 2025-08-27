const datosComunes = {
  frase:'',
  imagenes:{
    imgHeader:'',
    imgBanner1:'',
    imgBanner2:'',
    imgBanner3:'',
    imgBanner4:'',
    imgFondo1:'',
    imgFondo2:'',
  },
  fechaDia:'08',
  fechaMes:'Noviembre',
  fechaYear:'2025',
  religiosa:{
    hora:'18',
    minutos:'00',
    lugar:'Parroquia de San Gerardo María Mayela',
    direccion:'Abasolo, 56',
    direccionCol:'Centro',
    direccionCd:'Iguala de la independencia, Gro.',
    ubicacion:'https://maps.app.goo.gl/uD3MnRiPXFR6LvoU6',

  },
  recepcion:{
    hora:'19',
    minutos:'00',
    lugar:'Jardin Tres Virginias',
    direccion:'Blvd. H. Colegio Militar s/n',
    direccionCol:'Las Americas II',
    direccionCd:'Iguala de la independencia, Gro.',
    ubicacion:'https://maps.app.goo.gl/bYh5KqMDhBg6bycu8'
  },
  regalos:{
    frase:'', //PENDIENTE
    url:''
  },
  timeLine:{
    settings:{
      bgColor:'',
      color:'',
      lineColor:'',
    },
    protocol:[
      {
        id:1,
        time:'18:00 Hrs.', 
        name:'Ceremonia Religiosa',
        icon:'iglesia',
      },

      {
        id:2,
        time:'19:00 Hrs.',
        name:'Recepción',
        icon:'recepcion',
      },
      {
        id:3,
        time:'20:00 Hrs.',
        name:'Ceremonia Civil',
        icon:''
      },
      {
        id:4,
        time:'20:30 Hrs.',
        name:'Cena',
        icon:'comida'
      },
      
      {
        id:5,
        time:'22:00 Hrs.',
        name:'Protocolo',
        icon:'protocolo',
      },
      {
        id:6,
        time:'22:30 Hrs.',
        name:'Fiesta',
        icon:'baile',
      },
      {
        id:7,
        time:'03:00 Hrs.',
        name:'Banda',
        icon:'banda',
      },
      {
        id:8,
        time:'04:00 Hrs.',
        name:'Fin del Evento',
        icon:'fin',
      }
    ]
  },
  hoteles:[ //PENDIENTE
    {
      nombre:'',
      direccion:'',
      direccion_colonia:'',
      telefono:'',
      ubicacion:''
    },
    {
      nombre:'',
      direccion:'',
      direccion_colonia:'',
      telefono:'',
      ubicacion:''
    },
    {
      nombre:'',
      direccion:'',
      direccion_colonia:'',
      telefono:'',
      ubicacion:''
    },

  ]

}

const tipoevento={
  type:'boda',
  boda:{
    nombreNovia:'Mariana',
    nombreNovio:'Juan Pablo',
    padresNovia:{
      papa:'José Aurelio Durán Ramírez',
      mama:'Sonia Alarcón Rodríguez'
    },
    padresNovio:{
      papa:'Juan Salgado Salgado',
      mama:'Maria Luisa Muñoz Castillo',
    },
    padrinos:{
      padrino:'',
      madrina:'',
    },
    confirmacion:{
      novio:'',
      novia:''
    },
  },
  
  bautizo:{
    type:'bautizo',
    nombre:'',
    padres:{
      papa:'',
      mama:''
    },
    padrinos:{
      padrino:'',
      madrina:''
    }
  },
  
  XV:{
    type:'xv',
    nombre:'',
    padres:{
      papa:'',
      mama:''
    },
    padrinos:{
      padrino:'',
      madrina:''
    },
    confirmacion:'' //PENDIENTWE
  }
}

const getData = (type)=>{
  return {...datosComunes, ...tipoevento[type]}
}

export default getData

