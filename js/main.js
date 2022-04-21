let rightColor = document.getElementById("right-color"),
    leftColor = document.getElementById("left-color"),
    degree = document.getElementById("degree"),
    body = document.getElementById("body");

degree.addEventListener("input", updateGradient);
leftColor.addEventListener("input", updateGradient);
rightColor.addEventListener("input", updateGradient);


function updateGradient() {
    body.style.background = "linear-gradient(" + degree.value + "deg, " + leftColor.value + ", " + rightColor.value + ")";
}