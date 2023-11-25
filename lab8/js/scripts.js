function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function funcTabA(x, y, z, b) {
    let value = Math.log(Math.pow(Math.abs((y - Math.sqrt(Math.abs(Math.pow(x, 2) - b))) * (y - Math.pow(x, 2) / z + 4 * Math.pow(y, 2)) ), 2/3))
    return value;
}

function funcTabB(x, y, z) {
    let value = 1 - ((x+y)/Math.pow(Math.abs(z), 1.34)) + (Math.pow(y, 2) / factorial(3)) + (Math.pow(z, 3) / factorial(5)) + (Math.pow(Math.E, x-y)/z+y);
    return value;
}


var xMin = -1;
var xMax = 1;
var deltaX = 0.2;
var yMin = -2;
var yMax = 2;
var deltaY = 0.2;
var z = 1.32;

var tableBody1 = document.getElementById('tableBody1');
var tableBody2 = document.getElementById('tableBody2');

// Collect unique y values and x values
var uniqueYValues = new Set();
var uniqueXValues = new Set();

for (var y = yMin; y <= yMax; y += deltaY) {
    uniqueYValues.add(y.toFixed(2));
    var row1 = document.createElement('tr');
    row1.innerHTML = `<td>${y.toFixed(2) }</td>`;
    
    var row2 = document.createElement('tr');
    row2.innerHTML = `<td>${y.toFixed(2)}</td>`;

    for (var x = xMin; x <= xMax; x += deltaX) {
        var b = funcTabB(x, y, z);
        var a = funcTabA(x, y, z, b);

        // Add unique x values
        if (y === yMin) {
            uniqueXValues.add(x.toFixed(2));
        }

        row1.innerHTML += `<td>${b.toFixed(4)}</td>`;
        row2.innerHTML += `<td>${a.toFixed(4)}</td>`;
    }

    tableBody1.appendChild(row1);
    tableBody2.appendChild(row2);
}

// Create the header row for the first table
var headerRow1 = document.createElement('tr');
headerRow1.innerHTML = '<td>x/y</td>';
for (var x of uniqueXValues) {
    headerRow1.innerHTML += `<td>${x}</td>`;
}
tableBody1.insertBefore(headerRow1, tableBody1.firstChild);

// Create the header row for the second table
var headerRow2 = document.createElement('tr');
headerRow2.innerHTML = '<td>x/y</td>';
for (var x of uniqueXValues) {
    headerRow2.innerHTML += `<td>${x}</td>`;
}
tableBody2.insertBefore(headerRow2, tableBody2.firstChild);