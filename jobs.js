if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first.");
  window.location.href = "jobseeker-login.html";
}

const applyButtons = document.querySelectorAll(".apply-btn");

let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

applyButtons.forEach((button, index) => {
  const jobTitle = button.parentElement.querySelector("h3").innerText;

  if (appliedJobs.includes(jobTitle)) {
    button.innerText = "Applied";
    button.style.backgroundColor = "gray";
  }

  button.addEventListener("click", function () {
    if (!appliedJobs.includes(jobTitle)) {
      appliedJobs.push(jobTitle);
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

      button.innerText = "Applied";
      button.style.backgroundColor = "gray";
      alert("Application submitted successfully!");
    }
  });
});
