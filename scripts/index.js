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

    //delete the task
    const deleteButton = task_element.lastElementChild; 
    deleteButton.addEventListener("click", function() {
        task_element.remove();
    });

    task_list.appendChild(task_element);

};

add_button.addEventListener("click", add_task_function);