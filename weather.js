
setInterval(()=>{
    start()
},50000)
function start(){
           // 使用 Axios 发起 GET 请求
           //请求地址（在网站选择条件后，更新请求地址复制到这）
           let url=`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weathercode&daily=weathercode&timezone=America%2FNew_York&forecast_days=1`
           axios.get(url)
           .then(function (response) {
               // 请求成功后，处理数据并将其显示在页面上
               const dataDiv = document.getElementById('data');
               let weather = getData(JSON.stringify(response.data, null, 2))
               document.getElementById('temperature').innerHTML = weather.temperature
               document.getElementById('status').innerHTML = weather.status
               document.getElementById('icon').src = weather.icon
           })
           .catch(function (error) {
               // 处理请求错误
               console.error('请求错误:', error);
           });
}

function getData(data){
    let weatherData = JSON.parse(data)
    let weather = {
        temperature : null,
        status:'',
        icon:''
    }
    weather.temperature = weatherData.current.apparent_temperature
    const codeList = [
        {
            code:0,
            status:'Clear sky',
            icon:'./icon_weather/1.png'
        },
        {
            code:1,
            status:'Mainly clear',
            icon:'./icon_weather/1.png'
        },
        {
            code:2,
            status:'Partly cloudy',
            icon:'./icon_weather/2.png'
        },
        {
            code:3,
            status:'Overcast',
            icon:'./icon_weather/3.png'
        },
        {
            code:45,
            status:'Fog',
            icon:'./icon_weather/4.png'
        },
        {
            code:48,
            status:'Depositing rime fog',
            icon:'./icon_weather/4.png'
        },
        {
            code:51,
            status:'Drizzle',
            icon:'./icon_weather/5.png'
        },
        {
            code:53,
            status:'Drizzle',
            icon:'./icon_weather/5.png'
        },
        {
            code:55,
            status:'Drizzle',
            icon:'./icon_weather/5.png'
        },
        {
            code:56,
            status:'Freezing Drizzle',
            icon:'./icon_weather/8.png'
        },
        {
            code:57,
            status:'Freezing Drizzle',
            icon:'./icon_weather/8.png'
        },
        {
            code:61,
            status:'Rain',
            icon:'./icon_weather/7.png'
        },
        {
            code:63,
            status:'Rain',
            icon:'./icon_weather/7.png'
        },
        {
            code:65,
            status:'Rain',
            icon:'./icon_weather/8.png'
        },
        {
            code:66,
            status:'Freezing Rain',
            icon:'./icon_weather/8.png'
        },
        {
            code:67,
            status:'Freezing Rain',
            icon:'./icon_weather/8.png'
        },
        {
            code:71,
            status:'Snow fall',
            icon:'./icon_weather/9.png'
        },
        {
            code:73,
            status:'Snow fall',
            icon:'./icon_weather/9.png'
        },
        {
            code:75,
            status:'Snow fall',
            icon:'./icon_weather/9.png'
        },
        {
            code:77,
            status:'Snow grains',
            icon:'./icon_weather/10.png'
        },
        {
            code:80,
            status:'Rain showers',
            icon:'./icon_weather/11.png'
        },
        {
            code:81,
            status:'Rain showers',
            icon:'./icon_weather/11.png'
        },
        {
            code:82,
            status:'Rain showers',
            icon:'./icon_weather/11.png'
        },
        {
            code:85,
            status:'Snow showers',
            icon:'./icon_weather/12.png'
        },
        {
            code:86,
            status:'Snow showers',
            icon:'./icon_weather/12.png'
        },
        {
            code:95,
            status:'Thunderstorm',
            icon:'./icon_weather/13.png'
        },
        {
            code:96,
            status:'Thunderstorm',
            icon:'./icon_weather/14.png'
        },
        {
            code:99,
            status:'Thunderstorm',
            icon:'./icon_weather/14.png'
        },
    ]
    for(let i=0;i<codeList.length;i++ ){
        if(codeList[i].code == weatherData.current.weathercode){
            weather.status = codeList[i].status
            weather.icon = codeList[i].icon
        }
    }
    return weather
}

// function getPosition(){
//     let positionData ={
//         latitude:null,
//         Longitude:null
//     }
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             var latitude = position.coords.latitude;
//             var longitude = position.coords.longitude;
//             positionData = {
//                 latitude:latitude,
//                 longitude:longitude
//             }
//             return positionData
//         });
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
// }