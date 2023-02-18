count = () => {
    input = document.getElementById("input");
    count = input.value.length;
    result = document.getElementById("result");
    result.appendChild(document.createTextNode(count));
}