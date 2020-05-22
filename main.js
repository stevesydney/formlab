(function () {
  const fields = [
    "classification",
    "animal",
    "attributes"
  ];

  const classifications = ["Fish", "Reptile", "Bird"];

  const classificationInputs = document.querySelectorAll('select[name^="classification_"]');

  classificationInputs.forEach(classificationInput => {
    classifications.forEach(classification => {
      const option = document.createElement("option");
      option.text = classification;
      classificationInput.add(option);
    });
  });


  // const data = {
  //   bird: {
  //     emu: ["long legs", "small wings", "big beak"],
  //     penguin: ["short legs", "small wings", "small beak", "cute"],
  //     dodo: ["short legs", "big beak"]
  //   },
  //   fish: {
  //     swordfish: ["pointy nose", "big"],
  //     "flying fish": ["wings", "small", "fast"],
  //     goldfish: ["small", "gold", "hungry"]
  //   },
  //   reptile: {
  //     lizard: ["small", "four legs", "long tail", "fast"],
  //     crocodile: ["big", "sharp teeth"],
  //     snake: ["long", "no legs", "no hands"]
  //   }
  // };

  // setListeners("main");
  // sub_forms.forEach((sub_form) => {
  //   setListeners(sub_form);
  //   duplicateListeners(sub_form);
  // });
  // persistListeners();

  // function setListeners(form) {
  //   fields.forEach((field) => {
  //     const $element = document.querySelectorAll(`[name="${field}_${form}"]`);

  //     $element.forEach((el) => {
  //       el.addEventListener("input", (e) => {
  //         console.log(
  //           `${field} field on form: ${form} value has changed to ${e.target.value}`
  //         );
  //       });
  //     });
  //   });
  // }

  // function setPersistStatus(field, status) {
  //   persistStatus[field] = status;
  // }

  // function persistListeners() {
  //   fields.forEach((field) => {
  //     const $element = document.querySelectorAll(`[name="${field}_persist"]`);

  //     $element.forEach((el) => {
  //       el.addEventListener("input", (e) => {
  //         console.log(
  //           `persist on ${field} field is set to ${e.target.checked}`
  //         );
  //       });
  //     });
  //   });
  // }

  // function duplicateListeners(form) {
  //   fields.forEach((field) => {
  //     const $element = document.querySelectorAll(
  //       `[name="${field}_duplicate_${form}"]`
  //     );

  //     $element.forEach((el) => {
  //       el.addEventListener("input", (e) => {
  //         console.log(
  //           `duplicate lock on ${field} field in form: ${form} is set to ${e.target.checked}`
  //         );
  //       });
  //     });
  //   });
  // }

  // function setValue(field, form, values) {
  //   console.log(field, form, values);
  //   const $element = document.querySelectorAll(`[name="${field}_${form}"]`);

  //   $element.forEach((el) => {
  //     if (el.tagName === "INPUT" && el.getAttribute("type") === "checkbox") {
  //       el.checked = values.includes(el.value);
  //     } else {
  //       el.value = values;
  //     }
  //   });
  // }

  // function getValue(field, form) {
  //   const $elements = document.querySelectorAll(`[name="${field}_${form}"]`);

  //   let values = [];
  //   $elements.forEach((el) => {
  //     // checkbox
  //     if (el.tagName === "INPUT" && el.getAttribute("type") === "checkbox") {
  //       if (el.checked) values.push(el.value);
  //     } else {
  //       values.push(el.value);
  //     }
  //   });

  //   return values;
  // }
})();
