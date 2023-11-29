function getFormValues() {
    var formValues = {};

    formValues.name = document.getElementById('name').value;
    formValues.age = document.getElementById('age').value;

    if (document.getElementById('male').checked) {
        formValues.gender = 'Чоловіча';
    } else if (document.getElementById('female').checked) {
        formValues.gender = 'Жіноча';
    }

    formValues.hairColor = document.getElementById('hairColor').value;
    formValues.eyeColor = document.getElementById('eyeColor').value;
    formValues.date = document.getElementById('date').value;

    return formValues;
}

function handleSendButtonClick() {
    var formValues = getFormValues();
    console.log('Sending form values:', formValues);
}

function handleResetButtonClick() {
    var form = document.getElementById('login_form');
    form.querySelectorAll('input, select, textarea').forEach(function (element) {
        if ('defaultValue' in element) {
            element.value = element.defaultValue;
        } else {
            if ('defaultChecked' in element) {
                element.checked = element.defaultChecked;
            }
        }
    });
}

document.getElementById('send').addEventListener('click', handleSendButtonClick);
document.getElementById('reset').addEventListener('click', handleResetButtonClick);