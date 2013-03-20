var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html';

 
var urlosm = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>';


var map_gdoc;
function exemplo_gdoc(){

          Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         simpleSheet: true } );
   
   var CamadaBasica = L.tileLayer(urlosm,  { attribution: attribution, maxZoom: 18 })
   
   
   map_gdoc = L.map('map_gdoc',{layers:[CamadaBasica],center: UFES,zoom: 15});

    


 }

function showInfo(data) {
        for (i=0;i<data.length;i++){
             var p =  [parseFloat(data[i].latitude.replace(',','.')), 
                       parseFloat(data[i].longitude.replace(',','.'))]; 
            L.marker(p).addTo(map_gdoc).bindPopup(data[i].textomarcador);
        }
}
