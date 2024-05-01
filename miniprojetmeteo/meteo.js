
    //création de la fonction qui recupère les donnés de la ville
function getcityinfo(){ 
    //récuperer contenu de l'input grâce à son id comprise dans le HTML, stocakage de la variable city; 
    const city=document.getElementById("in1").value;
    console.log(city);
    //addition de chaine de caractère ,reconstruction de la bonne url à envoyer à l'url et convertir les données en kelvin en degrés celsiuis
    const apimeteo="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=fr&appid=b712e3f57688fdc92363680b21abb1c0";
    
    window.fetch(apimeteo)
    .then(res => res.json())
    .then(resJson => {

        //declarer les constantes et convetir en format string puis les concatener
        const temp= resJson.main.temp.toString()+"°C";
        const humidity = "Humidité :" + resJson.main.humidity.toString()+"%";
        const weather = "Temps : " + resJson.weather[0].description.toString();
        const name = "Température sur "+resJson.name.toString();
        const wind = "Vitesse du vent :" +resJson.wind.speed.toString()+"km/h";
       
        //stockage des constantes dans le contenu des paragraphes pour le HTML
        document.getElementById("temperature").textContent=temp;
        document.getElementById("name").textContent=name;
        document.getElementById("sky").textContent=weather;
        document.getElementById("humidity").textContent=humidity;
        document.getElementById("wind").textContent=wind;

        

    } );
    



}