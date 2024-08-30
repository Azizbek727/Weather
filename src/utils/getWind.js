export default function getWind(deg){
    let name = '';
    if (deg >=0 && deg <45 || deg > 315 && deg<=360) {
        name = 'Северный'
    } else if(deg >=45 && deg < 135) {
        name = 'Восточный'
    }
     else if(deg >=135 && deg < 225) {
        name = 'Южный'
    }
    else{
        name = "Западный"
    }
    return name;
}