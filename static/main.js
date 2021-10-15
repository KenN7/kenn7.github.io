
function main() {
    let print_button = document.querySelector("#print_button")
    if (print_button) {
        print_button.addEventListener('click', () => window.print() )
    }

    let show_correction = document.querySelectorAll(".correction_button")
    // console.log(show_correction)
    if (show_correction.length > 0) {
        for (let c of show_correction) {
            c.addEventListener('click', toggleCorrection)
        }
    }

    let show_all_correction = document.querySelector("#all_corr_button")
    console.log(show_all_correction)
    if (show_all_correction) {
        show_all_correction.addEventListener('click', toggleAllCorrections)
    }
}

function toggleAllCorrections() {
    let corrections = document.querySelectorAll(".correction")
    for (let c of corrections) {
        c.hidden = !c.hidden
    }
}

function toggleCorrection(e) {
    let correction = selectSibling(e.target, ".correction")
    if (correction) {
        // console.log(correction)
        correction.hidden = !correction.hidden;
    }
}

function selectSibling(el, sel) {
    let sib = el.nextElementSibling
    while (sib) {
        if (sib.matches(sel)) {
            return sib
        }
        sib = sib.nextElementSibling
    }
}

document.addEventListener("DOMContentLoaded", main);
