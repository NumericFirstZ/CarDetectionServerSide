<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script type="text/javascript" src="index.js"></script>
    <link rel="stylesheet" type="text/css" href="./style2.css" />

    <script src = "fetchdata.js" type="module"></script>
    
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <title>Car Dectecion</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark text-light bg-dark p-3 mb-2">

        <a class="navbar-brand navbar-light" href="index.php">
        <!-- <img src="images\favilogo.png" alt="" width="30" height="24" class="d-inline-block align-text-top"> -->
            CarDectection
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.php">GoogleMaps</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="datatable.php">DataTable</a>
                </li>
            </ul>
        </div>

    </nav>

    <div class="container">
        <h1 class="fw-bold text-center">Car Data-Table Accident Case</h1>
    </div>

    <div class="container mt-3">
        <table class="table table-dark table-hover">
            <thead>
                <th class="fs-4">Car No.</th>
                <th class="fs-4">Car Company</th>
                <th class="fs-4">Color</th>
                <th class="fs-4">Car Type</th>
                <th class="fs-4">License Plate</th>
                <th class="fs-4">Latitude </th>
                <th class="fs-4">Longitude</th>

            </thead>
            <tbody id="tbody1" class="text-left"> </tbody>
        </table>
    </div>

    <!-- <script type="module" id="getData">
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
                        cars.push(childSnapshot.val());
                    });
                    AddItemsToTable(cars);
                });
        }


        setTimeout(function() {
            window.location.reload(1);        

        }, 5000);
            window.onload = GetAllDataOnce;

    </script> -->

</body>

</html>