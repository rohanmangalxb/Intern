let btn = document.querySelector(".submit")
let TaskList = document.querySelector(".Tasks");
let TaskChild = Array.from(TaskList.children);

let myform = document.querySelector("form")

btn.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        let task = document.getElementById("task").value
        console.log(task)

        let deadline = document.getElementById("deadline").value;

        if (deadline.length === 0) {
            deadline = 'none'
        }
        console.log(deadline)

        let time = document.getElementById("time").value
        if (time.length === 0) {
            time = 'none'
        }

        let priority = document.querySelector('input[name="priority"]:checked').value;
        console.log(priority)

        let newTask = document.createElement("div")
        newTask.classList.add("card");

        TaskList.innerHTML += `<div class="card">
        
                <div class="rmCard">
                    <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete" width="25px">
                    <span>Cancel</span>
                </div>

                <div class="name"><b class="htext">Task: </b>${task}</div>
                <div class="deadline"><b class="htext">Deadline-Date: </b>${deadline}</div>
                    <div class="deadline"><b class="htext">Deadline-Time: </b>${time}</div>
                <div class="priority"><b class="htext">Priority: </b>${priority}</div>
            </div>`
    } catch (err) {
        alert(err)
    } finally {
        myform.reset()
    }

})

TaskList.addEventListener("click", function (e) {
    if (e.target.closest(".rmCard")) {
        const card = e.target.closest(".card");
        TaskList.removeChild(card);

        // If no tasks left, show "No tasks scheduled"
        if (TaskList.children.length === 0) {
            TaskList.innerHTML = `<div class="noT">No tasks scheduled</div>`;
        }
    }
});




// console.log(Array.from(TaskList.children))


if (TaskChild.length === 0) {
    TaskList.innerHTML = `<div class = "noT">No tasks scheduled</div>`
}

document.querySelector(".delete").addEventListener("click", () => {
    TaskList.innerHTML = `<div class = "noT">No tasks scheduled</div>`
})

