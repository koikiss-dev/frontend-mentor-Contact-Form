const form = document.getElementById("form");
const elementsFormInputs = form.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="radio"], input[type="checkbox"], textarea'
);
const elementsFormLabelsRadio = form.querySelectorAll(
  "#radio-general, radio-support"
);
const sucessMessageBox = document.getElementById("sucess-message");

const showValidMessage = () => {
  sucessMessageBox.classList.remove("hidden");
  sucessMessageBox.classList.add("block", "animate-[pulse_1s_ease-in-out]");
};

const hiddeValidMessage = () => {
  sucessMessageBox.classList.remove("block");
  sucessMessageBox.classList.add("hidden");
};

function checkValues() {
  if (elementsFormInputs.length !== 0) {
    const booleanValuesVallid = [];
    for (let i = 0; i < elementsFormInputs.length; i++) {
      const inputs = elementsFormInputs[i];
      const isValid = inputs.validity.valid;
      if (!isValid) {
        inputs.classList.add(
          "invalid:border-pink-500",
          "invalid:text-pink-600",
          "focus:invalid:border-pink-500"
        );
        booleanValuesVallid.push(false);
        if (
          inputs.type === "radio" ||
          (inputs.type === "checkbox" && !isValid)
        ) {
          elementsFormInputs[i].labels[0].classList.add(
            "has-[:invalid]:border-pink-500",
            "has-[:invalid]:text-pink-600",
            "peer-invalid:text-pink-600"
          );
          booleanValuesVallid.push(false);
          /* console.log(elementsFormInputs[i].labels[0].id); */
        }
      }
      const allTrue = booleanValuesVallid.every((val) => val === true);
      if (allTrue) {
        showValidMessage();
        setTimeout(() => {
          hiddeValidMessage();
        }, 5000);
      } else {
        hiddeValidMessage();
      }
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
