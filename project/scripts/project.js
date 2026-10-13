
const destinations = [
  {
    name: "Benin City",
    state: "Edo State",
    description:
      "Discover the history and cultural heritage of the ancient Benin Kingdom.",
    image: "images/benin.jpg",
  },
  {
    name: "Okomu National Park",
    state: "Edo State",
    description:
      "Explore a protected forest known for its wildlife and natural beauty.",
    image: "images/okomu.jpg",
  },
  {
    name: "Ososo Hills",
    state: "Edo State",
    description:
      "Enjoy scenic hills and beautiful views in northern Edo State.",
    image: "images/ososo-hill.webp",
  },
  {
    name: "Igun Street",
    state: "Edo State",
    description:
      "Explore a protected forest known for its wildlife and natural beauty.",
    image: "images/igun.png",
  },
  {
    name: "Gembu ",
    state: "Taraba State",
    description:
      "Enjoy scenic hills and beautiful views in Gembu highland region located on the Mambilla Plateau in Sardauna Local Government Area, Taraba State, Nigeria.",
    image: "images/gembu.png",
  },
];

// Display featured destinations
function displayDestinations() {
    const destinationContainer = document.getElementById("featured-destinations");

    if (destinationContainer) {
        destinationContainer.innerHTML = "";

        destinations.forEach(function(destination) {
            destinationContainer.innerHTML += `
                <article class="destination-card">
                    <img src="${destination.image}" alt="${destination.name}, ${destination.state}" loading="lazy">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                </article>
            `;
        });
    }
}

// Display the current year in the footer
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();


// Run the page functions
displayDestinations();
displayYear();