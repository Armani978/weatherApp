const button = document.querySelector('.button')
const city = document.querySelector('.city')
const cityName = document.querySelector('.cityName')


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=metric&appid=74c62e797a995a7a13dc55ecc5c38d9d')
    .then((response) => response.json())
    .then((data) => {
        const { name } = data;
        const {temp, temp_min, temp_max, humidity } = data.main;
        const {description} = data.weather[0];
        console.log(name);
        console.log(temp);
        console.log(temp_min);
        console.log(temp_max);
        console.log(humidity)
        console.log(description);
        
        
        cityName.innerText = 'The weather for: ' + name;
        document.querySelector('.temp').innerText = temp + '°C';
        document.querySelector('.humidity').innerText = 'Humidity:' + humidity + '%';
        document.querySelector('.highs').innerText = 'Hi: ' + temp_max + '°C';
        document.querySelector('.lows').innerText = 'Lo: ' + temp_min + '°C';

        document.querySelector('.description').innerHTML = 'Forecast: '+ description;
        temp.innerText = temp + '°C' ;
        // description.innerText= description;
        // humidity.innerText =
         
        

     } ) } )
