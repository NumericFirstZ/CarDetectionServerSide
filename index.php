<!DOCTYPE html>
<html lang="en">

<head>
    <title>Car Detection</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="./style.css" />

    <script src="fetchdataToMaps.js" type="module"></script>
    <script src="index.js" ></script>

    <!-- AIzaSyAuUvwnfRjDGHZZjU44NitMoc6rxWuzCgY -->
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuUvwnfRjDGHZZjU44NitMoc6rxWuzCgY&callback=initMap" defer async></script>

</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark text-light bg-dark p-3">

        <a class="navbar-brand" href="index.php">CarDectection</a>

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

    <div id="map"></div>

</body>

</html>