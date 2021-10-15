
function main() {
    let print_button = document.querySelector("#print_button")
    if (print_button) {
        print_button.addEventListener('click', () => window.print() )
    }

    let show_correction = document.querySelector("#correction_button")
    if (show_correction) {
        show_correction.addEventListener('click', toggleCorrections)
    }
}

function toggleCorrections() {
    let corrections = document.querySelectorAll(".correction")
    for (c of corrections) {
        c.hidden = !c.hidden;
    }
}

document.addEventListener("DOMContentLoaded", main);
