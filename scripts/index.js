const add_button = document.getElementsByClassName("add-button")[0]; 
const input_text = document.getElementsByClassName("input_text")[0];
const error_message = document.getElementsByClassName("error-message")[0];
const task_list = document.getElementsByClassName("tasks-list")[0]; 

function add_task_function() {
    const task_name = input_text.value.trim();
    if (!task_name) {
        //if input is empty display error message
        error_message.style.display = "block";
        setTimeout(() => {
            error_message.style.display = "none"; 
        }, 2000); 
        return;
    }
    // make a new task element
    const task_element = document.createElement('div');
    task_element.className = "task";
    task_element.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <span class="task-name">${task_name}</span>
    
    <button class="edit-button">
        <i class="fa-regular fa-keyboard"></i>
    </button>
    <button class="delete-button">
        <i class="fa-regular fa-trash-can"></i>
    </button>
`;

    //delete a task
    const deleteButton = task_element.lastElementChild; 
    deleteButton.addEventListener("click", function() {
        task_element.remove();
    });

    //edit task
    const editButton = task_element.querySelector('.edit-button');
    const taskName = task_element.querySelector('.task-name');

    editButton.addEventListener("click", function() {
        const newName = prompt("Edit the task:", taskName.textContent);
        if (newName !== null && newName.trim() !== "") {
            taskName.textContent = newName;
        }
        else{
            error_message.style.display = "block";
        setTimeout(() => {
            error_message.style.display = "none"; 
        }, 2000); 
        return;
        }
    });
    
    //change class name when textbox is checked
    const taskCheckbox = task_element.querySelector('.task-checkbox');
    taskCheckbox.addEventListener("change", function() {
        if (taskCheckbox.checked) {
            task_element.classList.remove("active");
            task_element.classList.add("completed");
        } else {
            task_element.classList.remove("completed");
            task_element.classList.add("active");
        }
    });


    task_list.appendChild(task_element);
    //delete task after being added to the list
    input_text.value = "";
};

add_button.addEventListener("click", add_task_function);