let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let last_click = {x:0, y:0}
const ctx_menu = document.getElementById("context-menu")

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

function get_click_position(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return {x:x, y:y}
}

function context_menu(event){
    last_click = get_click_position(canvas, event)
    event.preventDefault()
    ctx_menu.style.top = `${event.clientY}px`
    ctx_menu.style.left = `${event.clientX}px`
    ctx_menu.classList.remove("visible")
    setTimeout(() => {
        ctx_menu.classList.add("visible")
    })
}

function click_handler(event){
    if(event.target.offsetParent!==ctx_menu && ctx_menu.classList.contains("visible")){
        ctx_menu.classList.remove("visible")
        return;
    }
    last_click = get_click_position(canvas, event)
}