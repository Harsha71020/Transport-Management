const buses = [
    { id: 1, name: "AP Express", from: "Vijayawada", to: "Chennai", type: "AC Sleeper", seats: 30, departure: "08:00 AM", arrival: "02:00 PM", status: "On Time" },
    { id: 2, name: "Chennai Star", from: "Chennai", to: "Visakhapatnam", type: "Non-AC", seats: 40, departure: "09:00 AM", arrival: "04:00 PM", status: "Delayed" },
    { id: 3, name: "Guntur Flyer", from: "Guntur", to: "Chennai", type: "Volvo AC", seats: 25, departure: "10:00 AM", arrival: "03:30 PM", status: "On Time" },
    { id: 4, name: "Tirupati Link", from: "Tirupati", to: "Chennai", type: "AC Semi-Sleeper", seats: 35, departure: "07:30 AM", arrival: "11:00 AM", status: "On Time" },
    { id: 5, name: "Vishaka Shuttle", from: "Visakhapatnam", to: "Chennai", type: "Non-AC", seats: 45, departure: "06:00 AM", arrival: "03:00 PM", status: "On Time" },
    { id: 6, name: "Chennai-AP Connector", from: "Chennai", to: "Vijayawada", type: "AC Sleeper", seats: 28, departure: "05:00 PM", arrival: "11:00 PM", status: "Delayed" }
];

function searchBuses() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const busList = document.getElementById("busList");
    busList.innerHTML = ""; // Clear previous search results

    const filteredBuses = buses.filter(bus => bus.from === from && bus.to === to);

    if (filteredBuses.length === 0) {
        busList.innerHTML = "<p>No buses available for this route.</p>";
        return;
    }

    filteredBuses.forEach(bus => {
        const busCard = document.createElement("div");
        busCard.className = "bus-card";
        busCard.innerHTML = `
            <h3>${bus.name}</h3>
            <p>Type: ${bus.type}</p>
            <p>Route: ${bus.from} to ${bus.to}</p>
            <p>Departure: ${bus.departure} | Arrival: ${bus.arrival}</p>
            <p>Seats Available: ${bus.seats}</p>
            <p class="status">Status: ${bus.status}</p>
            <button onclick="bookBus(${bus.id})">Book Now</button>
        `;
        busList.appendChild(busCard);
    });
}

function bookBus(busId) {
    const bus = buses.find(b => b.id === busId);
    if (bus.seats > 0) {
        alert(`Booking confirmed for ${bus.name} from ${bus.from} to ${bus.to}!`);
        bus.seats--; // Simulate seat booking
        searchBuses(); // Refresh bus list
    } else {
        alert("No seats available!");
    }
}

// Populate Timetable
function loadTimetable() {
    const timetableBody = document.getElementById("timetableBody");
    buses.forEach(bus => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${bus.name}</td>
            <td>${bus.from} - ${bus.to}</td>
            <td>${bus.departure}</td>
            <td>${bus.arrival}</td>
        `;
        timetableBody.appendChild(row);
    });
}

// Load timetable on page load
window.onload = loadTimetable;
