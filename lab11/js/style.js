class Style {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    setStyle(property, value) {
        this.element.style[property] = value;
    }
}

function setStyledBackground() {
    const formStyle = new Style('login_form');
    formStyle.setStyle('background', 'lightblue');
}

function setBorderAndOutline() {
    const formStyle = new Style('login_form');
    formStyle.setStyle('border', '2px solid black');
    formStyle.setStyle('outline', '2px solid blue');
}

function setListStyle() {
    const formStyle = new Style('login_form');
    formStyle.setStyle('listStyle', 'circle inside');
}

function setMarginsAndPadding() {
    const formStyle = new Style('login_form');
    formStyle.setStyle('margin', '10px');
    formStyle.setStyle('padding', '10px');
}

function setTextParameters() {
    const formStyle = new Style('login_form');
    formStyle.setStyle('color', 'red');
    formStyle.setStyle('font', 'italic bold 20px Arial, sans-serif');
}