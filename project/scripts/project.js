// Menu 
const menubutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menubutton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menubutton.classList.toggle("open");
});

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
];

// Display featured destinations
function displayDestinations() {
  const destinationContainer = document.getElementById("featured-destinations");

  if (destinationContainer) {
    destinationContainer.innerHTML = "";

    destinations.forEach(function (destination) {
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

// call the page functions
displayDestinations();

// God help me

