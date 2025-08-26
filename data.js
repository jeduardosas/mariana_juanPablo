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
  fechaDia:'',
  fechaMes:'',
  fechaYear:'',
  religiosa:{
    hora:'',
    minutos:'',
    lugar:'',
    direccion:'',
    direccionCol:'',
    direccionCd:'',
    ubicacion:'',

  },
  recepcion:{
    hora:'',
    minutos:'',
    lugar:'',
    direccion:'',
    direccionCol:'',
    direccionCd:'',
    ubicacion:''
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
        time:'', 
        name:'',
        icon:'',
        color:'',
        textColor:''
      },

      {
        id:2,
        time:'',
        name:'',
        icon:'',
        color:'',
        textColor:''
      },
      {
        id:3,
        time:'',
        name:'',
        icon:'',
        color:'',
        textColor:''
      },
      {
        id:4,
        time:'',
        name:'',
        icon:'',
        color:'',
        textColor:''
      },
      
      {
        id:5,
        time:'',
        name:'  ',
        icon:'',
        color:'',
        textColor:''
      },
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
    nombreNovia:'',
    nombreNovio:'',
    padresNovia:{
      papa:'',
      mama:''
    },
    padresNovio:{
      papa:'',
      mama:'',
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

