const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const phoneError = document.getElementById("phone-error");
const nameError = document.getElementById("name-error");
const surnameError = document.getElementById("surname-error");
const thirdNameError = document.getElementById("po-error");
const birthdayError = document.getElementById("birthday-error")
const genderError = document.getElementById("stat-error");
const groupError = document.getElementById("group-error");
const fileError = document.getElementById("file-error");
const buttonError = document.getElementById("button-error");

$(document).ready(function () {
    $("#phoneNumber").inputmask({ "mask": "+38(099) 999-99-99" })
    $("#phoneNumber").on("input", function () {
        const phoneNumber = $(this).val();
        if (!$(this).inputmask("isComplete")) {
          phoneError.innerHTML = "Ви ввели замало цифр";
          return false
        } else {
            phoneError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
            return true;
        }

      });
});;

function validateEmail() {
    let email = document.getElementById("email");
    let emailValue = email.value;

    if(emailValue.length == 0) {
        emailError.innerHTML = "<b>Електронна пошта обов'язкова</b>";
        return false
    }
    if (email.validity.typeMismatch) {
        emailError.innerHTML = "<b>Неправильно введені дані</b>";
        return false;
    }
    emailError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
    return true;
}


function validateName() {
    const name = document.getElementById('name');

    const nameValue = name.value.trim();

    if (nameValue.length == 0) {
        nameError.innerHTML = "<b>Ім'я обов'язкове</b>";
        return false;
    }

    const namePattern = /^[A-ZА-ЯЁ][a-zа-яё]{1,}$/;
    if (!namePattern.test(nameValue)) {
        nameError.innerHTML = "<b>Неправильно введені дані</b>";
        return false;
    }

    nameError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
    return true;
}

function validateSurname() {
    const surname = document.getElementById('surname');
    const surnameValue = surname.value.trim();

    if (surnameValue.length == 0) {
        surnameError.innerHTML = "<b>Прізвище обов'язкове</b>";
        return false;
    }

    const surnamePattern = /^[A-ZА-ЯЁ][a-zа-яё]{1,}$/;
    if (!surnamePattern.test(surnameValue)) {
        surnameError.innerHTML = "<b>Неправильно введені дані</b>";
        return false;
    }

    surnameError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
    return true;
}

function validateThirdName() {
    const thirdName = document.getElementById('thirdname');
    const thirdNameValue = thirdName.value.trim();

    if (thirdNameValue.length == 0) {
        thirdNameError.innerHTML = "<b>По-батькові обов'язкове</b>";
        return false;
    }

    const thirdNamePattern = /^[A-ZА-ЯЁ][a-zа-яё]{1,}$/;
    if (!thirdNamePattern.test(thirdNameValue)) {
        thirdNameError.innerHTML = "<b>Неправильно введені дані</b>";
        return false;
    }

    thirdNameError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
    return true;
}

const password = document.getElementById('password');

password.addEventListener('input', function() {
    const inputValue = password.value;
    const sanitizedValue = inputValue.replace(/\s/g, ''); 

    if (inputValue !== sanitizedValue) {
        password.value = sanitizedValue;
    }
});

function validatePassword() {
    const passwordValue = password.value;
    if (passwordValue.length == 0) {
        passwordError.innerHTML = "<b>Пароль обов'язковий</b>";
        return false;
    }

    if(passwordValue.length < 8) {
        passwordError.innerHTML = "<b>Недостатньо символів</b>";
        return false;
    }
    passwordError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
    return true;

}

const birthdateInput = document.getElementById('birthday');
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const maxDate = `${year}-${month}-${day}`;

birthdateInput.setAttribute('max', maxDate);

function validateBirthday() {
    const birthdateValue = birthdateInput.value;

    if (birthdateValue === "") {
        birthdayError.innerHTML = "<b>Ви не заповнили дату народження</b>";
        return false;
    }

    const birthdateDate = new Date(birthdateValue);
    const currentDate = new Date();

    if (birthdateDate > currentDate) {
        birthdayError.innerHTML = "<b>Неправильна дата(майбутня дата)</b>";
        return false;
    }

    birthdayError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
    return true;

}

function validateGender() {
    const genderInputs = document.querySelectorAll('input[name="gender"]');

    let isGenderSelected = false;
    genderInputs.forEach(input => {
      if (input.checked) {
        isGenderSelected = true;
      }
    });

    if (!isGenderSelected) {
      genderError.innerHTML = "<b>Будь ласка, оберіть вашу стать</b>";
      return false
    } else {
      genderError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
      return true
    }
}

// function validateGroup() {
//     const groupSelect = document.getElementById('group');
//     const selectedValue = groupSelect.value;

//     if (selectedValue === 'none') {
//       groupError.innerHTML = 'Оберіть вашу групу';
//       return false;
//     } 
//     groupError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
//     return true;
// }

const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function () {
    const selectedFiles = fileInput.files;
    if (selectedFiles.length === 0) {
        fileError.innerHTML = 'Будь ласка, оберіть файл';
        return false;
    } else {
        fileError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
        return true
    }
});

function validateFile () {
    const selectedFiles = fileInput.files;
    if (selectedFiles.length === 0) {
        fileError.innerHTML = 'Будь ласка, оберіть файл';
        return false;
    }

    fileError.innerHTML = "<i class='fa-solid fa-check' style='color: #11ff00;'></i>";
    return true
}

// function validatePhone () {
//     const phoneInput = document.getElementById("phoneNumber");
//     const phoneValue = phoneInput.value;
//     if(phoneValue.length === 0 || phoneValue.length !== 9) {
//         phoneError.innerHTML = "Введіть номер"
//         return false
//     }
//     phoneError.innerHTML = ""
//     return true
// }

function validateForm() {
    if(!validateEmail() || !validatePassword() || !validateSurname()  || !validateName() || !validateThirdName() || !validateBirthday() || !validateGender() || !validateFile()) {
        buttonError.style.display = "block";
        buttonError.style.textAlign = 'center';
        buttonError.innerHTML = "Будь ласка, виправте помилки";
        // setTimeout(function(){buttonError.style.display = "none";}, 4000)
        return false

    }
}