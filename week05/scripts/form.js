// Display the current year in the footer
const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");
const today = new Date();

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

// Populate the product dropdown
const productSelect = document.querySelector("#select");

products.forEach(function (product) {
  let option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Count completed reviews on the confirmation page
const reviewCountElement = document.querySelector("#reviewCount");

if (reviewCountElement) {
  const params = new URLSearchParams(window.location.search);

  // count a submission containing the required form fields
  const hasSubmission =
    params.has("productName") &&
    params.has("rate") &&
    params.has("installDate") &&
    params.get("productName") !== "" &&
    params.get("rate") !== "" &&
    params.get("installDate") !== "";

  if (hasSubmission) {
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);
  }

  reviewCountElement.textContent = localStorage.getItem("reviewCount") || 0;
}
