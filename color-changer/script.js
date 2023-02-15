function changeColor(v) {
    document.getElementsByTagName("body")[0].style.backgroundColor =
        v.getAttribute("value");
}
var input = document.getElementsByTagName("input")[0];
input.oninput = function () {
    document.getElementsByTagName("body")[0].style.backgroundColor =
        input.value;
};
