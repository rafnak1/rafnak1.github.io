count = () => {
    input = document.getElementById("input");
    setResult(input.value.length);
}

setResult = (result) => {
    resultElement = document.getElementById("result");
    resultElement.firstChild.remove()
    resultElement.appendChild(document.createTextNode(result));
}