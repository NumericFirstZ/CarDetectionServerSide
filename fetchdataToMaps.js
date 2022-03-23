import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";

import {
    getDatabase,
    ref,
    child,
    onValue,
    get
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyASgK_aZM_UuPPvGOREgoDNL6d5DoRaXf0",
    authDomain: "first-6b8da.firebaseapp.com",
    databaseURL: "https://first-6b8da-default-rtdb.firebaseio.com",
    projectId: "first-6b8da",
    storageBucket: "first-6b8da.appspot.com",
    messagingSenderId: "205129993040",
    appId: "1:205129993040:web:0c70cff0698b0ccbed7a55",
    measurementId: "G-D7BBQG4TBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

var locations = [];

// ---------------------------GETTING ALL DATA------------------------------
function GetAllDataOnce() {
    const dbRef = ref(db);

    get(child(dbRef, "car"))
        .then((snapshot) => {
            var cars = [];
            var temp = [];
            // console.log(cars);
            snapshot.forEach(childSnapshot => {
                const data = childSnapshot.val();
                temp.push(data.CarLPlate, data.Latitude, data.Longitude, data.CarType, data.CarColor);
                locations.push(temp);
                temp = [];
                cars.push(childSnapshot.val());
            });

            // console.log(cars);
            // console.log(temp);
            // console.log(locations);
        });
}

//[License,LAT,LONG,TYPE,COLOR,STATUS,GAS,FIRE]
// var locations = [
//     ['1กง 3661 กรุงเทพ', 7.007497641334244, 100.4966144176749, 'PICKUP', 'BLACK', 'FLIPED', 'SAFE', 'SAFE'],
//     ['1กก 9999 กรุงเทพ', 7.0151879646563415, 100.48672749145888, 'SPORT', 'RED', 'NORMAL', 'SAFE', 'SAFE'],
//     ['กข 2104 สงขลา', 6.9986936311913635, 100.48865579252079, 'SUV', 'BLACK', 'DANGER', 'SAFE', 'NOT SAFE'],
//     ['วป 7446 สงขลา', 6.988253878185102, 100.49668453755916, 'PICKUP', 'WHITE', 'FLIPED', 'NOT SAFE', 'NOT SAFE']
// ];

var map;
// console.log(locations);

// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 12,
//         center: new google.maps.LatLng(locations[0][1], locations[0][2]),
//         mapTypeId: google.maps.MapTypeId.TERRAIN,
//     });
//     let marker, i;
//     for (i = 0; i < locations.length; i++) {

//         let contentString;

//         marker = new google.maps.Marker({
//             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//             map: map,
//             icon: 'images/m2.png'
//         });

//         google.maps.event.addListener(marker, 'click', (function(marker, i) {

//             var infowindow = new google.maps.InfoWindow({ content: contentString, });

//             contentString =
//                 '<div id="content">' +
//                 '<h2>Car Crash Alert</h2>' +
//                 '<hr>' +
//                 '<b>Car Info</b>' +
//                 '<br>Car Latitude: ' + locations[i][1] +
//                 '<br>Car Longitude: ' + locations[i][2] +
//                 '<br>License Plate: ' + locations[i][0] +
//                 '<br>Car Type: ' + locations[i][3] +
//                 '<br>Color: ' + locations[i][4] +
//                 '<hr>' +
//                 '<b>Car Status</b>' +
//                 '<br>Status: ' + locations[i][5] +
//                 '<br>Gas: ' + locations[i][6] +
//                 '<br>Fire: ' + locations[i][7] +
//                 '<hr>' +

//                 '<div id="bt">' +
//                 '<button id ="bt-1" onclick="RunCase()">Accept</button>' +
//                 '<button id ="bt-2" onclick="CloseMarker()">Deny</button>' +
//                 '</div>' +
//                 '</div>';

//             return function() {

//                 infowindow.setContent(contentString);
//                 infowindow.open(map, marker);
//                 map.setZoom(12);
//                 map.panTo(marker.getPosition());
//                 infowindow.open(map, marker);

//             }
//         })(marker, i));
//     }
// }

// function CloseMarker() {
//     infowindow.close(map, marker)
// }

// function RunCase() {
//     infowindow.close(map, marker)
// }

// setTimeout(function() {
//     window.location.reload(1);

// }, 5000);
window.onload = GetAllDataOnce;