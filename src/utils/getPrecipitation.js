export default function getPrecipitation(current){
    let name = ''
    if (current.rain) {
        name = 'Возможен Дождь'
    }
    else if(current.snow){
       name = 'Возможен Снег' 
    }
    else{
        name = 'Без осадков'
    }
    return name
}