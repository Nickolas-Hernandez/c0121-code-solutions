var $contactForm = document.forms[0];

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var formValues = {
    userName: $contactForm.elements.name.value,
    userEmail: $contactForm.elements.email.value,
    userMessage: $contactForm.elements.message.value
  };
  console.log(formValues);
  $contactForm.reset();
});
