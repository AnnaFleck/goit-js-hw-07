const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (onFormSubmit) => {
  onFormSubmit.preventDefault();

  const { email, password } = formEl.elements;
  if (email.value === "" || password.value === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    formEl.reset();
  }
});
