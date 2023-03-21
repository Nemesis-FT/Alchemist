let canvas = document.getElementById("canvas");
function resize() {
    let parent = canvas.parentNode
    let styles = getComputedStyle(parent)
    let w = parseInt(styles.getPropertyValue("width"), 10)
    let h = parseInt(styles.getPropertyValue("height"), 10)
    canvas.width = w - 10
    canvas.height = h
}
window.onresize = resize;
resize()
let ctx = canvas.getContext("2d");