count = () => {
    input = document.getElementById("input");
    c = input.value.length;
    result = document.getElementById("result");
    result.firstChild.remove()
    result.appendChild(document.createTextNode(c));
}