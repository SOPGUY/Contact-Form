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
  