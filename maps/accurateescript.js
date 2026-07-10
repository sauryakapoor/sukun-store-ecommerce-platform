let map;
let autocomplete;
let service;

function initMap() {
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocomplete"), {
        types: ["geocode"]
    });

    autocomplete.addListener("place_changed", searchNearbyPlaces);
}

function searchNearbyPlaces() {
    const place = autocomplete.getPlace();

    if (!place.geometry) {
        alert("No location details available for the selected place!");
        return;
    }

    const location = place.geometry.location;

    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 15,
    });

    service = new google.maps.places.PlacesService(map);
    const selectedType = document.getElementById("type").value;

    service.nearbySearch(
        {
            location: location,
            radius: 5000,
            type: selectedType,
        },
        callback
    );
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        const tableBody = document.getElementById("places").querySelector("tbody");
        tableBody.innerHTML = ""; // Clear previous results

        results.forEach((place) => {
            createMarker(place, tableBody);
        });
    } else {
        alert("No results found!");
    }
}

function createMarker(place, tableBody) {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = place.name;

    const imageUrl = place.photos
        ? place.photos[0].getUrl({ maxWidth: 300, maxHeight: 300 })
        : "https://via.placeholder.com/150";

    cell2.innerHTML = `<img src="${imageUrl}" alt="${place.name}" width="300" height="300">`;
}
