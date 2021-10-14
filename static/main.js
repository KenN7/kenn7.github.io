
function main() {
    let print_button = document.querySelector("#print_button")
    if (print_button) {
        print_button.onclick = () => window.print()
    }
}

document.addEventListener("DOMContentLoaded", main);