let countries= [
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
]



// async function loadCountries() {
//   try {
//     const response = await fetch("/countries.json");
//     countries = await response.json();
//     console.log(countries);
    
//   } catch (err) {
//     console.error(err);
//   }
// }

// loadCountries();
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
const fields = [
  { name: "Full Name", type: "text",validation:function(e,errorElement){
    if(e.target.value.trim().length<3){
        errorElement.textContent = "Name must be 3 characters atleast";
    }
    else{
        errorElement.textContent = "";
    }
  } },
  { name: "Email Address", type: "email",validation:(e,errorElement)=>{
    const isEmailCorrect = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value.trim());
    if(!isEmailCorrect){
        errorElement.textContent = "Please enter correct Email";
    }
    else{
        errorElement.textContent = "";
    }

  } },
  { name: "Mobile Number", type: "tel",validation:(e,errorElement)=>{
    const number = e.target.value.trim();
    const isNumber = /^[0-9]{10}$/.test(number);
    // console.log(isNumber)
    isNumber?errorElement.textContent = "":errorElement.textContent = "Please Enter Exact 10 digits";
  } },
  { name: "Date of Birth", type: "date",validation:(e,errorElement)=>{
        const dob = new Date(e.target.value);
        const today = new Date();
        const eighteenYearsMs = 18 * 365 * 24 * 60 * 60 * 1000;
        const msDiff = today - dob;
        const isUserOlderthanEighteen = msDiff >= eighteenYearsMs;
        console.log(isUserOlderthanEighteen);
        isUserOlderthanEighteen?errorElement.textContent="":errorElement.textContent="User Must be 18+";
  } },
  { name: "Password", type: "password",validation: (e, errorElement) => {
  const password = e.target.value.trim();
  const confirmInput =
    e.target.parentElement.nextElementSibling?.querySelector("input");

  let message = "Password must contain:";

  if (password.length < 8) {
    message += " at least 8 characters,";
  }
  if (!/[A-Z]/.test(password)) {
    message += " one uppercase letter,";
  }
  if (!/[a-z]/.test(password)) {
    message += " one lowercase letter,";
  }
  if (!/[0-9]/.test(password)) {
    message += " one digit,";
  }

  if (confirmInput && confirmInput.value && password !== confirmInput.value) {
    message += " passwords must match,";
  }

  if (message !== "Password must contain:") {
    errorElement.textContent = message.slice(0, -1);
  } else {
    errorElement.textContent = "";
  }
}
,
  showPassword:(e)=>{
        let inputType = e.target.previousElementSibling.type;
        if(inputType==="password"){
            e.target.previousElementSibling.type="text";
        }
        else{
           e.target.previousElementSibling.type="password" 
        }
  }
},
  { name: "Confirm Password", type: "password",
    validation: (e, errorElement) => {
  const confirmPassword = e.target.value.trim();
  const passwordInput =
    e.target.parentElement.previousElementSibling.querySelector("input");

  let message = "Password must contain:";

  if (confirmPassword.length < 8) {
    message += " at least 8 characters,";
  }
  if (!/[A-Z]/.test(confirmPassword)) {
    message += " one uppercase letter,";
  }
  if (!/[a-z]/.test(confirmPassword)) {
    message += " one lowercase letter,";
  }
  if (!/[0-9]/.test(confirmPassword)) {
    message += " one digit,";
  }

  if (confirmPassword !== passwordInput.value) {
    message += " passwords must match,";
  }

  if (message !== "Password must contain:") {
    errorElement.textContent = message.slice(0, -1);
  } else {
    errorElement.textContent = "";
  }
}
,
    showPassword:(e)=>{
        let inputType = e.target.previousElementSibling.type;
        if(inputType==="password"){
            e.target.previousElementSibling.type="text";
        }
        else{
           e.target.previousElementSibling.type="password" 
        }
    }
   }
];
const genders = ["Male","Female"];
const skills =["HTML","CSS","JS"];

function createElement(element){
    return document.createElement(element);
}
let form = createElement("FORM");
form.classList.add("shadow-2xl","p-4","rounded-2xl","grid","grid-cols-1","md:grid-cols-2","gap-4","max-w-200","w-full");
body.appendChild(form);

function generateInputFields(){
    fields.forEach((field) => {
       let div = createElement("DIV");
       let label = createElement("LABEL");
       label.textContent = field.name;
       label.classList.add("block","font-bold","mb-2");
       label.htmlFor = field.name.toLowerCase().split(" ").join("-");
       let input = createElement("INPUT");
       input.type = field.type;
       input.name = field.name.toLowerCase().split(" ").join("-");
       input.id = field.name.toLowerCase().split(" ").join("-");
       input.classList.add("border-2","p-4","rounded-2xl","w-full");
       let error = createElement("P");
       error.textContent = "";
       error.classList.add("text-red-500");

       div.appendChild(label);
       div.appendChild(input);
        if(field.type==="password"){
        let togglePassword = createElement("DIV");
        togglePassword.textContent = "Show Password";
        togglePassword.addEventListener("mousedown",(e)=>{
            field.showPassword(e);
        })
        div.appendChild(togglePassword);
       } 
       div.appendChild(error);
       form.appendChild(div);
       input.addEventListener("keyup",(e)=>{ field?.validation(e,error) });
       input.addEventListener("change",(e)=>{ field?.validation(e,error) });
       input.addEventListener("blur",(e)=>{ field?.validation(e,error) });
   }) 
}
function generateCountryDropdown(countriesData) {
  const countryDropdown = createElement("SELECT");
  countryDropdown.name = "country";
  countriesData.forEach(country => {
    const option = createElement("OPTION");
    option.textContent = country;
    option.value = country;
    countryDropdown.appendChild(option);
  });

  countryDropdown.classList.add("w-full","border-2","p-4","rounded-2xl");
  countryDropdown.addEventListener("change",(e)=>{
    if(e.target.value==="India"){
        generateIndianStateDropdown()
    }
    else{
        if(e.target.nextElementSibling){
            e.target.nextElementSibling.remove();
        }
    }
  })
  form.appendChild(countryDropdown);
}
function generateMultiInputsWithMultipleOptions(){
    let skillsDropdown = createElement("SELECT");
    skillsDropdown.classList.add("w-full","border-2","p-4","rounded-2xl")
    skills.forEach(skill => {
        let option = createElement("OPTION");
        option.textContent = skill;
        option.value = skill;
        skillsDropdown.appendChild(option);
    });
    form.appendChild(skillsDropdown);
    
}
function generateRadioInputs(name, options) {
  const wrapper = createElement("DIV");
  
 
  const error = createElement("P");
  error.classList.add("text-red-500", "mt-1");

  options.forEach(option => {
    const label = createElement("LABEL");
    const radio = createElement("INPUT");

    radio.type = "radio";
    radio.name = name;       
    radio.value = option;
    label.classList.add("mr-4");
 
    label.appendChild(radio);
    label.append(option);

 
    radio.addEventListener("change", () => {
      error.textContent = "";  
    });

    wrapper.appendChild(label);
  });

 
  wrapper.appendChild(error);
  form.appendChild(wrapper);

 
}

function generateIndianStateDropdown(){
    let stateDropdown = createElement("SELECT");
    stateDropdown.name ="indianstates";
    stateDropdown.classList.add("w-full","border-2","p-4","rounded-2xl")
    indianStates.forEach(state =>{
        let stateOption = createElement("OPTION");
        stateOption.textContent = state;
        stateOption.value = state;
        stateDropdown.appendChild(stateOption);
    })
    form.appendChild(stateDropdown);
}
generateInputFields();
generateMultiInputsWithMultipleOptions();
generateCountryDropdown(countries);
generateRadioInputs("gender", genders);
