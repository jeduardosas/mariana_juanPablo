const obtnerTextoConfirmacion = (type,nombre1='',nombre2='',numero='')=>{

  console.log('DESDE LA FUNCION OBTENER TEXTO',type,nombre1,nombre2,numero)
  
  if(type === 'xv'){
    return `https://api.whatsapp.com/send?phone=${numero}&text=¡Hola!👋%20Quiero%20confirmar%20mi%20asistencia%20a%20los%20XV%20de%20*${nombre1}*%20`
  }

  if(type=== 'boda'){
    return `https://api.whatsapp.com/send?phone=${numero}&text=¡Hola!👋%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20Boda%20de%20*${nombre1}*%20y%20*${nombre2}*%20💒🤵🏻👰🏻`
  }
  if(type === 'bautizo'){
    return `https://api.whatsapp.com/send?phone=${numero}&text=¡Hola!👋%20Quiero%20confirmar%20mi%20asistencia%20al%20bautizo%20de%20*${nombre1}*%20`
  }
}

export default obtnerTextoConfirmacion