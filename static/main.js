
function main() {
    const print_button = document.querySelector("#print_button")
    if (print_button) {
        print_button.addEventListener('click', () => window.print() )
    }

    // we add the solution toggler only if there are solutions:
    const show_solution_but = document.querySelectorAll(".solution")
    //console.log(show_solution_but.length)
    if (show_solution_but.length > 0) {
        let but = document.createElement("button");
        but.append("Display solutions")
        but.classList.add("no-print", "button_effect")
        but.id = "all_sol_button"
        let div_but = document.getElementById('all_sol_but_div');
        div_but.append(but);

        const solTog = new solutionToggler(but)
    }
}

/* <button id="all_sol_button" class="no-print button_effect">Display solutions</button> */

class solutionToggler {
    constructor(but) {
        this.hiddenState = true
        this.solutions_elts = {}
        this.solutions_states = {}
        this.show_all_solutions = but

        //this.show_all_solutions = document.querySelector("#all_sol_button")
        if (this.show_all_solutions) {
            this.show_all_solutions.addEventListener('click', () => this.toggleAllSolutions())
        }

        const show_solution_but = document.querySelectorAll(".solution_button")

        for (const [i,but] of show_solution_but.entries()) {
            const solution = selectSibling(but, ".solution")
            const id = "sol_"+i
            this.solutions_elts[id] = [but,solution]
            this.solutions_states[id] = true
            but.addEventListener('click', () => this.changeStateSolution(id, !this.solutions_states[id]))
        }
    }

    toggleAllSolutions() {
        //console.log(this)
        this.hiddenState = !this.hiddenState
        this.show_all_solutions.textContent = this.hiddenState ? "Display solutions" : "Hide solutions"

        for (let s of Object.keys(this.solutions_states)) {
            this.changeStateSolution(s, this.hiddenState)
        }
    }

    changeStateSolution(sol_id, state) {
        const [but,sol] = this.solutions_elts[sol_id]
        but.textContent = state ? "👇" : "👆"
        but.title = state ? "See Solution": "Hide Solution"
        //we need to handle the transition in js because max-height:auto
        // cannot be animated
        sol.style.maxHeight = state ? "0px" : sol.scrollHeight+"px"
        sol.classList.toggle("hidden", state)
        this.solutions_states[sol_id] = state
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
