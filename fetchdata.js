var stdNo = 0;
var tbody = document.getElementById('tbody1');

function AddItemToTable(carcom, color, lplate, cart, lat, long) {
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");

    td1.innerHTML = ++stdNo;
    td2.innerHTML = carcom;
    td3.innerHTML = color;
    td4.innerHTML = lplate;
    td5.innerHTML = cart;
    td6.innerHTML = lat;
    td7.innerHTML = long;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    tbody.appendChild(trow);

}

function AddItemsToTable(TheCar) {
    stdNo = 0;
    tbody.innerHTML = "";
    TheCar.forEach(element => {
        AddItemToTable(element.CarCompany, element.CarColor, element.CarType, element.CarLPlate, element.Latitude, element.Longitude);
    });
}

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
// console.log(db);
// ---------------------------GETTING ALL DATA------------------------------
function GetAllDataOnce() {
    const dbRef = ref(db);

    get(child(dbRef, "car"))
        .then((snapshot) => {
            var cars = [];
            // console.log(cars);
            snapshot.forEach(childSnapshot => {
                // console.log(childSnapshot);
                cars.push(childSnapshot.val());
            });
            AddItemsToTable(cars);
        });
}


setTimeout(function() {
    window.location.reload(1);

}, 5000);
window.onload = GetAllDataOnce;