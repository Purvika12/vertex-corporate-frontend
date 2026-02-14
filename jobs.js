// Protect page
if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first.");
  window.location.href = "jobseeker-login.html";
}

const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");
const jobCards = document.querySelectorAll(".job-card");

// Filter Function
function filterJobs() {
  const searchValue = searchInput.value.toLowerCase();
  const locationValue = locationFilter.value;
  const typeValue = typeFilter.value;

  jobCards.forEach(card => {
    const role = card.dataset.role.toLowerCase();
    const location = card.dataset.location;
    const type = card.dataset.type;

    const matchSearch = role.includes(searchValue);
    const matchLocation = locationValue === "" || location === locationValue;
    const matchType = typeValue === "" || type === typeValue;

    if (matchSearch && matchLocation && matchType) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterJobs);
locationFilter.addEventListener("change", filterJobs);
typeFilter.addEventListener("change", filterJobs);

// Apply Logic (Persistent)
let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

document.querySelectorAll(".apply-btn").forEach(button => {
  const jobTitle = button.parentElement.querySelector("h3").innerText;

  if (appliedJobs.includes(jobTitle)) {
    button.innerText = "Applied";
    button.style.backgroundColor = "gray";
  }

  button.addEventListener("click", () => {
    if (!appliedJobs.includes(jobTitle)) {
      appliedJobs.push(jobTitle);
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

      button.innerText = "Applied";
      button.style.backgroundColor = "gray";
      alert("Application submitted successfully!");
    }
  });
});


