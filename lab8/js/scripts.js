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

        for (var x = xMin; x <= xMax; x += deltaX) {
            for (var y = yMin; y <= yMax; y += deltaY) {
                var b = funcTabB(x, y, z);
                var a = funcTabA(x, y, z, b);

                var row = document.createElement('tr');
                row.innerHTML = `
                    <td>${x.toFixed(2)}</td>
                    <td>${y.toFixed(2)}</td>
                    <td>${z.toFixed(2)}</td>
                    <td>${b.toFixed(4)}</td>
                `;
                tableBody1.appendChild(row);

                var row = document.createElement('tr');
                row.innerHTML = `
                    <td>${x.toFixed(2)}</td>
                    <td>${y.toFixed(2)}</td>
                    <td>${z.toFixed(2)}</td>
                    <td>${a.toFixed(4)}</td>
                `;
                tableBody2.appendChild(row)
            }
        }