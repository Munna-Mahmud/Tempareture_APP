// 46ad7457603b9b0104e633e78cd60e16

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// icon img 
// const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;


const API_KEY = `57d1e3ed9fa0238c507b1d6e37bdf0d0`
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;

//     if( city.value === undefined){
//         alert('PLz Try Another location')
//     //    document.getElementById('city').innerHTML='Sorry Not Found'
// }
    
    // console.log(city)
city.value=''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
   
}


const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;

}
// display tempareture 
const displayTemperature = tempareture => {
    setInnerText('city', tempareture.name)
    setInnerText('temperature', tempareture.main.temp)

    let weatherType = document.getElementById('condition');
    weatherType.innerText = `${tempareture.weather[0].main}`

    //   let weatherType= setInnerText('condition', tempareture.weather[0].main)
    //    let weatherType = document.getElementById('weather');
    //    weatherType.innerText = `${condition====.weather[0].main}`;
    console.log(tempareture)

    // showing appropriate icons
    const url = `http://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);


    //showing weatherType Images 
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('images/rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        
    } 
}

