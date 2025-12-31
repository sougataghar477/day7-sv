// Countries list for country dropdown
let countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

// Indian states list (used only when India is selected)
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

const body = document.body;
let skillsDropdownBlurred = false;
let countriesDropdownBlurred = false;
// Input fields config with validation logic
const fields = [
  // Full Name input configuration
  {
    name: "Full Name",
    type: "text",
    hasUserTouchedAField:false,
    validation: function (input, errorElement) {
      if(this.hasUserTouchedAField){
      // Trim spaces and check minimum length
      if (input.value.trim().length < 3) {
        errorElement.textContent = "Name must be 3 characters atleast";
        return false;
      }

      // Clear error if valid
      errorElement.textContent = "";
      return true;
    }}
  },

  // Email input configuration
  {
    name: "Email Address",
    type: "email",
    hasUserTouchedAField:false,
    validation: function (input, errorElement) {
      if(this.hasUserTouchedAField){
      // Regex to check valid email format
      const isEmailCorrect =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          input.value.trim()
        );

      // Show error if email format is incorrect
      if (!isEmailCorrect) {
        errorElement.textContent = "Please enter correct Email";
        return false;
      }

      // Clear error if valid
      errorElement.textContent = "";
      return true;
    }
  }
  },

  // Mobile number input configuration
  {
    name: "Mobile Number",
    type: "tel",
    hasUserTouchedAField:false,
    validation: function (input, errorElement) {
      if(this.hasUserTouchedAField){
      // Regex to allow only 10 digit numbers
      const isNumber = /^[0-9]{10}$/.test(input.value.trim());

      // Show error if number is not exactly 10 digits
      if (!isNumber) {
        errorElement.textContent = "Please Enter Exact 10 digits";
        return false;
      }

      // Clear error if valid
      errorElement.textContent = "";
      return true;}
    }
  },

  // Date of birth input configuration
  {
    name: "Date of Birth",
    type: "date",
    hasUserTouchedAField:false,
    validation: function (input, errorElement) {
      // Convert selected date into Date object
      if(this.hasUserTouchedAField){
      const dob = new Date(input.value);

      // Get current date
      const today = new Date();

      // Milliseconds equivalent of 18 years
      const eighteenYearsMs = 18 * 365 * 24 * 60 * 60 * 1000;
      if(!input.value){
        errorElement.textContent = "Select Date Of Birth";
      }
      else{
        // Check if user is younger than 18
        if (today - dob < eighteenYearsMs) {
          errorElement.textContent = "User Must be 18+";
          return false;
        }
        // Clear error if valid
        else{
          errorElement.textContent = "";
        }
      }

     
    }}
  },

  // Password input configuration
  {
    name: "Password",
    type: "password",
    hasUserTouchedAField:false,
    validation: function (input, errorElement) {
      // Get trimmed password value
      const password = input.value.trim();

      // Get confirm password input from next field
      const confirmInput =
        input.parentElement.nextElementSibling?.querySelector("input");

      // Base error message
      let message = "Password must contain:";
      if(this.hasUserTouchedAField){
      // Check minimum length of password
      if (password.length < 8) {
        message += " " + (8 - ~~input.value.length) + " characters more,";
      }

      // Check for at least one uppercase letter
      if (!/[A-Z]/.test(password)) {
        message += " one uppercase letter,";
      }

      // Check for at least one lowercase letter
      if (!/[a-z]/.test(password)) {
        message += " one lowercase letter,";
      }

      // Check for at least one digit
      if (!/[0-9]/.test(password)) {
        message += " one digit,";
      }

      // If confirm password exists, check if both passwords match
      if (confirmInput && confirmInput.value && password !== confirmInput.value) {
        message += " passwords must match,";
      }

      // If message changed, show error
      if (message !== "Password must contain:") {
        errorElement.textContent = message.slice(0, -1);
        return false;
      }

      // Clear error if password is valid
      errorElement.textContent = "";
      return true;
    }
    },

    // Show / hide password functionality
    showPassword: function (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  },

  // Confirm Password input configuration
  {
    name: "Confirm Password",
    type: "password",
    hasUserTouchedAField:false,
    validation: function (input, errorElement) {
      // Get original password input from previous field
      const passwordInput =
        input.parentElement.previousElementSibling.querySelector("input");

      // Base error message
      let message = "Password must contain:";
      if(this.hasUserTouchedAField){
      // Check minimum length
      if (input.value.length < 8) {
        message += " " + (8 - ~~input.value.length) + " characters more,";
      }

      // Check uppercase letter
      if (!/[A-Z]/.test(input.value)) {
        message += " one uppercase letter,";
      }

      // Check lowercase letter
      if (!/[a-z]/.test(input.value)) {
        message += " one lowercase letter,";
      }

      // Check digit
      if (!/[0-9]/.test(input.value)) {
        message += " one digit,";
      }

      // Check if confirm password matches original password
      if (input.value !== passwordInput.value) {
        message += " passwords must match,";
      }

      // If any rule fails, show error
      if (message !== "Password must contain:") {
        errorElement.textContent = message.slice(0, -1);
        return false;
      }

      // Clear error if valid
      errorElement.textContent = "";
      return true;
    }
    },

    // Show / hide confirm password
    showPassword: function (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  }
];


const genders = ["Male", "Female"];
const skills = ["HTML", "CSS", "JS"];

// Helper function to create elements
function createElement(element) {
  return document.createElement(element);
}

// Create form element
const form = createElement("FORM");

form.classList.add(
  "shadow-2xl",
  "p-4",
  "rounded-2xl",
  "grid",
  "grid-cols-1",
  "md:grid-cols-2",
  "gap-4",
  "max-w-200",
  "w-full"
);

// Attach submit handler
form.addEventListener("submit", submitFormHandler);

// Append form to body
body.appendChild(form);

// Generate text and password inputs
function generateInputFields() {
  fields.forEach(field => {
    const div = createElement("DIV");
    const label = createElement("LABEL");
    const input = createElement("INPUT");
    const errorElement = createElement("P");

    label.textContent = field.name;
    label.classList.add("block", "font-bold", "mb-2");

    input.type = field.type;
    input.name = field.name.toLowerCase().split(" ").join("-");
    input.id = input.name;
    input.classList.add("border-2", "p-4", "rounded-2xl", "w-full");

    errorElement.classList.add("text-red-500");

    div.appendChild(label);
    div.appendChild(input);

    // Show / hide password option
    if (field.type === "password") {
      const toggle = createElement("DIV");
      toggle.textContent = "Show Password";
      toggle.addEventListener("mousedown", () =>{
        field.showPassword(input);
        if(toggle.textContent==="Show Password"){
            toggle.textContent="Hide Password";
        }
        else{
            toggle.textContent="Show Password";
        }
      });
      div.appendChild(toggle);
    }

    div.appendChild(errorElement);
    form.appendChild(div);

    // Validate input on user interaction
    ["keyup", "change", "blur"].forEach(e =>{
      if(e==="blur"){ 
        input.addEventListener(e, () =>{
          field.hasUserTouchedAField=true;
          field.validation(input, errorElement);

        })
      }
      else{
        input.addEventListener(e, () =>
          field.validation(input, errorElement)
        )
      }
    });
  });
}

// Generate skills dropdown
function generateskillsDropdown() {
  const wrapper = createElement("DIV");
  const skillsDropdown = createElement("SELECT");
  const errorElement = createElement("P");

  skillsDropdown.name = "skills";
  skillsDropdown.classList.add("w-full", "border-2", "p-4", "rounded-2xl");
  errorElement.classList.add("text-red-500");

  const placeHolder = createElement("OPTION");
  placeHolder.value = "";
  placeHolder.textContent = "Select A Skill";
  placeHolder.disabled = true;
  placeHolder.selected = true;

  skillsDropdown.appendChild(placeHolder);

  skills.forEach(skill => {
    const option = createElement("OPTION");
    option.value = skill;
    option.textContent = skill;
    skillsDropdown.appendChild(option);
  });

  skillsDropdown.addEventListener("change", () => {
    errorElement.textContent = "";
  });

  wrapper.appendChild(skillsDropdown);
  wrapper.appendChild(errorElement);
  form.appendChild(wrapper);
      skillsDropdown.addEventListener("blur",()=>{
    if(!skillsDropdown.value){
      errorElement.textContent = "Please Select a Skill";
    }
  })
}

// Generate country dropdown
function generateCountryDropdown(countriesData) {
  const wrapper = createElement("DIV");
  const countryDropdown = createElement("SELECT");
  const errorElement = createElement("P");

  countryDropdown.name = "country";
  countryDropdown.classList.add("w-full", "border-2", "p-4", "rounded-2xl");
  errorElement.classList.add("text-red-500");

  const placeHolder = createElement("OPTION");
  placeHolder.value = "";
  placeHolder.textContent = "Select A Country";
  placeHolder.disabled = true;
  placeHolder.selected = true;

  countryDropdown.appendChild(placeHolder);

  countriesData.forEach(country => {
    const option = createElement("OPTION");
    option.value = country;
    option.textContent = country;
    countryDropdown.appendChild(option);
  });

  countryDropdown.addEventListener("change", e => {
    if (e.target.value === "India") {
      generateIndianStateDropdown(e);
    } else {
      if (wrapper.nextElementSibling?.tagName === "SELECT") {
        wrapper.nextElementSibling.remove();
      }
    }
    errorElement.textContent = "";
  });

  wrapper.appendChild(countryDropdown);
  wrapper.appendChild(errorElement);
  form.appendChild(wrapper);
    countryDropdown.addEventListener("blur",()=>{
    if(!countryDropdown.value){
      errorElement.textContent = "Please Select a Country";
    }
  })
}

// Generate Indian states dropdown
function generateIndianStateDropdown(e) {
  const wrapper = createElement("DIV");
  const stateDropdown = createElement("SELECT");
  const errorElement = createElement("P");

  stateDropdown.name = "indian-states";
  stateDropdown.classList.add("w-full", "border-2", "p-4", "rounded-2xl");
  errorElement.classList.add("text-red-500");

  const placeHolder = createElement("OPTION");
  placeHolder.value = "";
  placeHolder.textContent = "Select a State";
  placeHolder.disabled = true;
  placeHolder.selected = true;

  stateDropdown.appendChild(placeHolder);

  indianStates.forEach(state => {
    const option = createElement("OPTION");
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
  });

  stateDropdown.addEventListener("change", () => {
    errorElement.textContent = "";
  });
  stateDropdown.addEventListener("blur",()=>{
        if(!stateDropdown.value){
      errorElement.textContent = "Please Select a State";
    }
  })
  wrapper.appendChild(stateDropdown);
  wrapper.appendChild(errorElement);

  e.target.parentElement.after(wrapper);
}

// Generate gender radio inputs
function generateRadioInputs(name, options) {
  const wrapper = createElement("DIV");
  const errorElement = createElement("P");

  errorElement.classList.add("text-red-500");

  options.forEach(option => {
    const label = createElement("LABEL");
    const radio = createElement("INPUT");

    radio.type = "radio";
    radio.name = name;
    radio.value = option;
    label.classList.add("mr-4");

    radio.addEventListener("change", () => {
      errorElement.textContent = "";
    });

    label.appendChild(radio);
    label.append(option);
    wrapper.appendChild(label);
  });

  wrapper.appendChild(errorElement);
  form.appendChild(wrapper);
}

// Generate terms and conditions checkbox
function generateTermsAndConditions() {
  const label = createElement("LABEL");
  const input = createElement("INPUT");

  input.type = "checkbox";
  label.appendChild(input);
  label.append("Terms and Conditions");
  form.appendChild(label);

  input.addEventListener("change", e => {
    submitBtn.disabled = !e.target.checked;
  });
}

let submitBtn;

// Generate submit button
function generateFormSubmitter() {
  submitBtn = createElement("BUTTON");

  submitBtn.type = "submit";
  submitBtn.disabled = true;
  submitBtn.textContent = "Submit";

  submitBtn.classList.add(
    "disabled:bg-slate-600",
    "bg-black",
    "text-white",
    "md:col-span-2",
    "p-4",
    "rounded-2xl"
  );

  form.appendChild(submitBtn);
}

// Form submit handler
function submitFormHandler(e) {
  e.preventDefault();

  let isThereAnyError = false;
  let isGenderSelected = false;
  let genderErrorMessage;

  const formChildren = Array.from(e.target.children);

  // Collect input fields
  const inputFields = formChildren
    .map(a => a.children[1]?.tagName === "INPUT" ? a.children[1] : undefined)
    .filter(Boolean);

  // Collect dropdowns
  const dropDowns = formChildren
    .map(a => a.children[0]?.tagName === "SELECT" ? a.children[0] : null)
    .filter(Boolean);

  dropDowns.forEach(dropDown => checkDropdownValue(dropDown));

  // Validate text inputs
  for (let i = 0; i < inputFields.length; i++) {
    fields[i].validation(
      inputFields[i],
      inputFields[i].nextElementSibling.tagName === "P"
        ? inputFields[i].nextElementSibling
        : inputFields[i].nextElementSibling.nextElementSibling
    );
  }

  // Gender validation
  const selectedGenders = document.querySelectorAll('input[name="gender"]');

  selectedGenders.forEach(radio => {
    genderErrorMessage =
      radio.parentElement.parentElement.querySelector("p");

    if (radio.checked) {
      isGenderSelected = true;
    }
  });

  if (!isGenderSelected) {
    genderErrorMessage.textContent = "Select A Gender";
  }

  // Check if any error message exists
  document.querySelectorAll(".text-red-500").forEach(el => {
    if (el.textContent !== "") {
      isThereAnyError = true;
    }
  });

  if (!isThereAnyError) {
    console.log(new FormData(e.target));
  }
}

// Dropdown validation
function checkDropdownValue(element) {
  if (element.value === "") {
    element.nextElementSibling.textContent = "Please Select An Option";
  }
}

// Initialize form
generateInputFields();
generateskillsDropdown();
generateCountryDropdown(countries);
generateRadioInputs("gender", genders);
generateTermsAndConditions();
generateFormSubmitter();
