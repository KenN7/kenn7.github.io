
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
        this.solutions = {}

        this.show_all_solutions = document.querySelector("#all_sol_button")
        if (this.show_all_solutions) {
            this.show_all_solutions.addEventListener('click', () => this.toggleAllSolutions())
        }

        this.show_solution_but = document.querySelectorAll(".solution_button")

        for (const [i,but] of this.show_solution_but.entries()) {
            const solution = selectSibling(but, ".solution")
            const id = "sol_"+i
            but.setAttribute("sol_id",id)
            this.solutions[id] = [but,solution,{"state":true}]
            but.addEventListener('click', () => this.toggleSolution(id))
        }
    }

    toggleAllSolutions() {
        //console.log(this)
        this.hiddenState = !this.hiddenState
        this.show_all_solutions.textContent = this.hiddenState ? "Display solutions" : "Hide solutions"

        for (let s of this.show_solution_but) {
            this.changeStateSolution(s.getAttribute("sol_id"), this.hiddenState)
        }
    }

    toggleSolution(sol_id) {
        const [but,sol,s] = this.solutions[sol_id]
        s.state = !s.state
        this.changeStateSolution(sol_id, s.state)
    }

    changeStateSolution(sol_id, state) {
        const [but,sol,s] = this.solutions[sol_id]
        but.textContent = state ? "👇" : "👆"
        but.title = state ? "See Solution": "Hide Solution"
        sol.hidden = state
        s.state = state
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
