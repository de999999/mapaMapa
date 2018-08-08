// 1. create variables for our map
// 2. Write a function that initializes our map
// 3. We're going to run that funciton

var ourLoc;
var view;
var map;


function init() {
    ourLoc = ol.proj.fromLonLat([41.043316, 28.862457]);

    view = new ol.View({
        center: ourLoc,
        zoom: 6
    });

    map = new ol.Map({
        target: 'map',
        //Create layers ("Paints" the map onto your website)
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        loadTilesWhileAnimating: true,
        view:view
    });

    console.log("LOADED@");
}

// How do we know our web page loads for the first time?
// document.addEventListener("DOMContentLoaded", function (e){
//     console.log("LOADED LSKDMFLKSDMFLKSDMFLKM")
//     init()
// });

window.onload = init;

//Animates the map- zooms in(but we need to connect it to html)

function panHome() {
    view.animate({
        center: ourLoc,
        duration:2000
    });
}

// Create a function that will go to a specific location
// Using another API
function panToLocation(){
    var countryName = document.getElementById("country-name").value;

    //Error check to make sure the country is spelled correctly
    if(countryName ==="united states"){
        alert("You didn't enter a country name!");
        return;
    }
    var lon = 0.0;
    var lat = 0.0;
    

    var query = "https://restcountries.eu/rest/v2/name/"+countryName; 
    query = query.replace(/ /g, "%20");
    alert(query);

    var countryRequest = new  XMLHttpRequest();
    countryRequest.open('GET', query, false);

    countryRequest.send();

    var countryInformation = JSON.parse(countryRequest.response(Text))
    


    var location = ol.proj.fromLonLat([lon, lat]);

    view.animate({
        center: location,
        duration: 2000 
    });
}



