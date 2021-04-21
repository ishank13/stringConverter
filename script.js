
function upperCase(){
    var x = document.getElementById('inputString').value;
    var y = x.toUpperCase();
    console.log(y);
    document.getElementById('outputString').innerText = y;
}

function lowerCase(){
    var x = document.getElementById('inputString').value;
    var y = x.toLowerCase();
    console.log(y);
    document.getElementById('outputString').innerText = y;
}

function pascalCase(){
    var x = document.getElementById('inputString').value;
    var y = x.match(/[a-z]+/gi)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    })
    .join('')
    
    document.getElementById('outputString').innerText = y;
}

function snakeCase(){
    var x = document.getElementById('inputString').value;
    var y = x.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
    document.getElementById('outputString').innerText = y;
}

function uppersnakeCase(){
    var x = document.getElementById('inputString').value; 
    var y = x.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
    document.getElementById('outputString').innerText = y.toUpperCase();
}

function kebabCase(){
    var x = document.getElementById('inputString').value;
    var y = x.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
    document.getElementById('outputString').innerText = y;
}

function camelCase() {
    var x = document.getElementById('inputString').value;
    var y =  x.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
    document.getElementById('outputString').innerText = y;
}

