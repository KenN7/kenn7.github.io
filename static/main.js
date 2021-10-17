
function main() {
    let print_button = document.querySelector("#print_button")
    if (print_button) {
        print_button.addEventListener('click', () => window.print() )
    }

    const solTog = new solutionToggler()
}

class solutionToggler {
    constructor() {
        this.hiddenState = true
        this.solutions_elts = {}
        this.solutions_states = {}

        this.show_all_solutions = document.querySelector("#all_sol_button")
        if (this.show_all_solutions) {
            this.show_all_solutions.addEventListener('click', () => this.toggleAllSolutions())
        }

        let show_solution_but = document.querySelectorAll(".solution_button")

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
        sol.hidden = state
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
