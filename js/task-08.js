const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((email, password) => {
    console.log(email);
    console.log(password);
  });

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
});
