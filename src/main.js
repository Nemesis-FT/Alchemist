let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let last_click = {x: 0, y: 0}
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
    return {x: x, y: y}
}

function context_menu(event) {
    last_click = get_click_position(canvas, event)
    event.preventDefault()
    ctx_menu.style.top = `${event.clientY}px`
    ctx_menu.style.left = `${event.clientX}px`
    ctx_menu.classList.remove("visible")
    setTimeout(() => {
        ctx_menu.classList.add("visible")
    })
}

function click_handler(event) {
    if (event.target.offsetParent !== ctx_menu && ctx_menu.classList.contains("visible")) {
        ctx_menu.classList.remove("visible")
        return;
    }
    last_click = get_click_position(canvas, event)
}

let project = new Project()

async function new_table(event) {
    const params = `scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no,width=800,height=600`;
    const newWindow = window.open('src/windows/new_table/new_table.html', 'new_table', params);
    newWindow.addEventListener("load", (event) => {
        newWindow.postMessage({project:project, mode:"create"}, '*');
    })
    newWindow.postMessage({project:project, mode:"create"}, '*');
    ctx_menu.classList.remove("visible")
}

window.addEventListener('message', (event) => {
    if (event.data.operation === "create_table") {
        project.addTable(event.data.table)
    }
    console.debug(project)
})