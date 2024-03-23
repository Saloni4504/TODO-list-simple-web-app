document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const dueDateInput = document.getElementById("dueDate");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    function addTask(taskText, dueDate) {
      const listItem = document.createElement("li");
  
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
  
      if (dueDate) {
        const dueDateSpan = document.createElement("span");
        dueDateSpan.textContent = " (Due: " + dueDate + ")";
        listItem.appendChild(dueDateSpan);
      }
  
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Complete";
      completeBtn.addEventListener("click", function() {
        taskSpan.style.textDecoration = "line-through";
        completeBtn.style.display = "none";
        deleteBtn.style.display = "inline";
      });
      listItem.appendChild(completeBtn);
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function() {
        listItem.remove();
      });
      deleteBtn.style.display = "none";
      listItem.appendChild(deleteBtn);
  
      listItem.appendChild(taskSpan); // Move this line down to include taskSpan in listItem
      taskList.appendChild(listItem);
    }
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      const dueDate = dueDateInput.value;
  
      if (taskText !== "") {
        addTask(taskText, dueDate);
        taskInput.value = "";
        dueDateInput.value = "";
      } else {
        alert("Please enter a task.");
      }
    });
  });
  