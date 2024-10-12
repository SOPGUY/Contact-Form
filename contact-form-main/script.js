// let input = document.getElementsByClassName("input1");
// let input = document.getElementsByClassName("input2");
// let input= document.getElementsByClassName("input3");
// let submit = document.getElementsByClassName("submit")
// let contena = document.getElementsByClassName("contena")

// submit.addEventListener("click", ()=>{
//     if(input.value === ""){
//         let para = document.createElement("p") 
//         para.textContent= "This field is required"
//         para.style.color= "red"
//         contena.appendChild(para)
//     }
// }

// )
// document.addEventListener("DOMContentLoaded", function() {
//     const submitButton = document.querySelector(".submit");
  
//     submitButton.addEventListener("click", function(event) {
//       event.preventDefault(); // Prevent form submission to keep error messages visible
  
//       // Selecting all input fields that require validation
//       const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
      
//       // Checking each input field for empty value
//       inputs.forEach(function(input) {
//         if (input.value.trim() === "") {
//           const errorMessage = document.createElement("p");
//           errorMessage.textContent = "This field is required";
//           errorMessage.classList.add("text-red-500", "text-sm", "mt-1");
          
//           // Adding error message after the input field
//           input.parentNode.appendChild(errorMessage);
          
//           // Adding red border to highlight the empty field
//           input.classList.add("border-red-500");
//         } else {
//           // Remove any existing error message
//           const existingErrorMessage = input.parentNode.querySelector("p");
//           if (existingErrorMessage) {
//             existingErrorMessage.remove();
//           }
          
//           // Remove red border if input is filled
//           input.classList.remove("border-red-500");
//         }
//       });
//     });
//   });
// const form = document.querySelector("#form");
// const fname = document.querySelector("#fname");
// const lname = document.querySelector("#lname");
// const email = document.querySelector("#email");
// const message = document.querySelector("#message");
// const alertMes = document.querySelector(".alert-mes");
// const inputs = document.querySelectorAll("input");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (checkForm()) {
//     alertMes.style.display = "block";
//     submitForm();
//   }
  
// });
// // Form Validation
// function checkForm() {
//   let isValid = true;

// }

//   // First Name Check
//   if (fname.value === "") {
//     fname.classList.add("error-state");
//     document.querySelector(".fname-error").style.display = "block";
//     fname.focus();
//     isValid = false;
//   } else {
//     fname.classList.remove("error-state");
//     document.querySelector(".fname-error").style.display = "none";
//   }
  
//   // Last Name Check
//   if (lname.value === "") {
//     lname.classList.add("error-state");
//     document.querySelector(".lname-error").style.display = "block";
//     lname.focus();
//     isValid = false;
//   } else {
//     lname.classList.remove("error-state");
//     document.querySelector(".lname-error").style.display = "none";
//   }

//   // Email Check
//   if (email.value === "") {
//     email.classList.add("error-state");
//     document.querySelector(".email-error").style.display = "block";
//     email.focus();
//     isValid = false;
//   } else {
//     email.classList.remove("error-state");
//     document.querySelector(".email-error").style.display = "none";
//   }

//   // Query Check
//   if (!radioChecked()) {
//     document.querySelector(".query-error").style.display = "block";
//     isValid = false;
//   } else {
//     document.querySelector(".query-error").style.display = "none";
//   }
  
//   // Message Check
//   if (message.value === "") {
//     message.classList.add("error-state");
//     document.querySelector(".msg-error").style.display = "block";
//     isValid = false;
//   } else {
//     message.classList.remove("error-state");
//     document.querySelector(".msg-error").style.display = "none";
//   }

//   // Checkbox Check
//   if (!document.querySelector("#checkbox").checked) {
//     document.querySelector(".contract-error").style.display = "block";
//     isValid = false;
//   } else {
//     document.querySelector(".contract-error").style.display = "none";
//   }

//   return isValid;

// // Checking if the radio is checked.
// function radioChecked() {
//   const radios = document.getElementsByName("query");
//   for (let i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       return true;
//     }
//   }
//   return false;
// }

// // Reset the error message
// fname.addEventListener("input", () => {
//   document.querySelector(".fname-error").style.display = "none";
//   if (fname.classList.contains("error-state")) {
//     fname.classList.remove("error-state");
//   }
// });
// lname.addEventListener("input", () => {
//   document.querySelector(".lname-error").style.display = "none";
// });
// email.addEventListener("input", () => {
//   document.querySelector(".email-error").style.display = "none";
// });
// message.addEventListener("input", () => {
//   document.querySelector(".msg-error").style.display = "none";
// });
// document.querySelector("#checkbox").addEventListener("input", () => {
//   document.querySelector(".contract-error").style.display = "none";
// });
// document.querySelector("#message").addEventListener("input", () => {
//   document.querySelector(".msg-error").style.display = "none";
// });
// document.querySelector("input[type='radio']").addEventListener("input", () => {
//   document.querySelector(".query-error").style.display = "none";
// });
// // Checking the radio button when clicking on the radio class
// document.querySelectorAll(".radio").forEach((radio) => {
//   radio.addEventListener("click", () => {
//     document.querySelectorAll(".radio").forEach((radio) => {
//       if (radio.classList.contains("checked-radio")) {
//         radio.classList.remove("checked-radio");
//       }
//     });
//     const radioElement = radio.querySelector("input[type='radio']");
//     radioElement.checked = true;
//     radioElement.parentElement.classList.add("checked-radio");
//   });
// });
// function submitForm() {
//   const formData = new FormData(form);
//   fetch(form.action, {
//     method: form.method,
//     body: formData,
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log("Form submitted successfully");
//       } else {
//         console.error("Form submition failed");
//       }
//     })
//     .catch((error) => {
//       console.error("Form submission error", error);
//     });
// }




  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Clear previous error messages
      clearErrors();

      // Validate form inputs
      const firstName = document.getElementById("fname").value.trim();
      const lastName = document.getElementById("lname").value.trim();
      const email = document.getElementById("email").value.trim();
      const queryType = document.querySelector(
        'input[name="queryType"]:checked'
      );
      const message = document.getElementById("message").value.trim();
      const terms = document.getElementById("terms").checked;

      let isValid = true;

      // First Name validation
      if (!firstName) {
        showError("fnameError", "First Name is required");
        isValid = false;
      }

      // Last Name validation
      if (!lastName) {
        showError("lnameError", "Last Name is required");
        isValid = false;
      }

      // Email validation
      if (!email) {
        showError("emailError", "Email Address is required");
        isValid = false;
      } else if (!validateEmail(email)) {
        showError("emailError", "Invalid email address");
        isValid = false;
      }

      // Query Type validation
      if (!queryType) {
        showError("queryTypeError", "Please select a query type");
        isValid = false;
      }

      // Message validation
      if (!message) {
        showError("messageError", "Message is required");
        isValid = false;
      }

      // Terms validation
      if (!terms) {
        showError("termsError", "You must agree to the terms and conditions");
        isValid = false;
      }

      // If valid, submit the form or perform further actions
      if (isValid) {
        alert("Form submitted successfully!");
        // Perform form submission here (e.g., send data to the server)
      }
    });

  // Helper functions

  // Show error message
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }

  // Clear all error messages
  function clearErrors() {
    document.querySelectorAll(".error").forEach((errorElement) => {
      errorElement.textContent = "";
    });
  }

  // Email validation regex
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  