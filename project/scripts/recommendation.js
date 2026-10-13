function displayRecommendations() {
  const recommendationList = document.getElementById("recommendation-list");

  if (recommendationList) {
    const savedRecommendations =
      JSON.parse(localStorage.getItem("naijaRecommendations")) || [];

    recommendationList.innerHTML = "";

    if (savedRecommendations.length === 0) {
      recommendationList.innerHTML = `
                <p>No recommendations have been submitted yet.</p>
            `;
    } else {
      savedRecommendations.forEach(function (place) {
        recommendationList.innerHTML += `
                    <article class="destination-card recommendation-item">
                        <h3>${place.name}</h3>
                        <p><strong>State:</strong> ${place.state}</p>
                        <p><strong>Category:</strong> ${place.category}</p>
                        <p>${place.description}</p>
                        <p><strong>Recommended by:</strong> ${place.visitor}</p>
                    </article>
                `;
      });
    }
  }
}

function saveRecommendation(event) {
  event.preventDefault();

  const visitorName = document.getElementById("visitor-name").value.trim();
  const placeName = document.getElementById("place-name").value.trim();
  const placeState = document.getElementById("place-state").value.trim();
  const placeCategory = document.getElementById("place-category").value;
  const placeDescription = document
    .getElementById("place-description")
    .value.trim();
  const formMessage = document.getElementById("form-message");

  if (
    visitorName === "" ||
    placeName === "" ||
    placeState === "" ||
    placeCategory === "" ||
    placeDescription === ""
  ) {
    formMessage.textContent = "Please complete all the fields.";
  } else {
    const newRecommendation = {
      visitor: visitorName,
      name: placeName,
      state: placeState,
      category: placeCategory,
      description: placeDescription,
    };

    const savedRecommendations =
      JSON.parse(localStorage.getItem("naijaRecommendations")) || [];

    savedRecommendations.push(newRecommendation);

    localStorage.setItem(
      "naijaRecommendations",
      JSON.stringify(savedRecommendations),
    );

    formMessage.textContent = "Thank you! Your recommendation has been saved.";

    document.getElementById("recommendation-form").reset();

    displayRecommendations();
  }
}

const recommendationForm = document.getElementById("recommendation-form");

if (recommendationForm) {
  recommendationForm.addEventListener("submit", saveRecommendation);
}


displayRecommendations();