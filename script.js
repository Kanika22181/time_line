// Select the timeline container
var container = document.getElementById('timeline');

// Define timeline events with descriptions and images
var items = new vis.DataSet([
    { id: 1, content: "First Railway Proposal", start: "1832-01-01", description: "First proposal for a railway system in India was made in 1832.", image: "image_1.jpg" },
    { id: 2, content: "First Passenger Train", start: "1853-04-16", description: "Route: Mumbai (Boree Bunder) → Thane (34 km). The first train in India, operated by the Great Indian Peninsula Railway (GIPR), was flagged off with 14 coaches and 400 passengers.", image: "image_2.jpg" },
    { id: 3, content: "North India's First Train", start: "1864-03-01", description: "The first railway line in North India was opened, connecting Delhi to Agra. The first train in the Eastern region ran from Howrah to Hooghly (39 km).The first train in South India operated from Royapuram (Madras) to Arcot (97 km) in 1856.", image: "image_3.jpg" },
    { id: 4, content: "First Electric Train", start: "1925-02-03", description: "The first electric train ran between Mumbai and Pune, setting the foundation for electrification.", image: "image_4.jpg" },
    { id: 5, content: "Computerized Ticketing", start: "1986-07-01", description: "Indian Railways launched computerized ticket reservations in New Delhi.", image: "image_5.jpg" },
    { id: 6, content: "Bullet Train Project", start: "2014-09-14", description: "India's first bullet train project from Mumabi to Ahemdabad was launched.", image: "image_6.jpg" },
    { id: 7, content: "100% Electrification", start: "2017-11-01", description: "The government aimed to fully electrify all broad-gauge routes by 2030.", image: "image_7.jpg" },
    { id: 8, content: "Vande Bharat Expansion", start: "2023-01-15", description: "India launched multiple semi-high-speed Vande Bharat trains, reducing travel time significantly.", image: "image_8.jpg" }
]);

// Set timeline options
var options = {
    start: "1800-01-01",
    end: "2030-12-31",
    editable: false,
    margin: 20,
    showCurrentTime: true, // Shows a marker for the current date
    zoomable: true, // Allows zooming
    clickToUse: true
};

// Create the timeline
var timeline = new vis.Timeline(container, items, options);

// Modal elements
var modal = document.getElementById("eventModal");
var modalTitle = document.getElementById("eventTitle");
var modalDescription = document.getElementById("eventDescription");
var modalImage = document.getElementById("eventImage");
var closeModal = document.getElementsByClassName("close")[0];

// Event listener for item clicks
timeline.on('select', function (properties) {
    if (properties.items.length > 0) {
        var item = items.get(properties.items[0]);
        modalTitle.innerText = item.content;
        modalDescription.innerText = item.description;
        modalImage.src = item.image; // Set image source
        modalImage.style.display = "block"; // Show the image
        modal.style.display = "block";
    }
});

// Close modal when clicking 'x'
closeModal.onclick = function () {
    modal.style.display = "none";
};

// Close modal if user clicks outside of content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
