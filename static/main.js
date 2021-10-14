
function main() {
    let print_button = document.querySelector("#print_button")
    if (print_button) {
        print_button.onclick = () => window.print()
    }

    let show_correction = document.querySelector("#correction_button")
    if (show_correction) {
        show_correction.onclick = toggleCorrections
    }
}

function toggleCorrections() {
    let corrections = document.querySelectorAll(".correction")
    for (c of corrections) {
        console.log(c.style.display)
        if (c.style.display === 'none' || c.style.display === '') {
            c.style.display = 'unset'
        } else {
            c.style.display = 'none'
        }
    }
}

document.addEventListener("DOMContentLoaded", main);