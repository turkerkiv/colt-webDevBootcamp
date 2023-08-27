let todoList = [];

while (true) {
    let input = prompt("Enter a command to do.");
    if (input.toLowerCase() === "add") {
        let task = prompt("Enter a task");
        todoList.push(task);
        console.log("Task added successfully");
    } else if (input.toLowerCase() === "list") {
        console.log("******");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i} - ${todoList[i]}`);
        }
        console.log("******");
    } else if (input.toLowerCase() === "delete" && todoList.length > 0) {
        let index = prompt("Enter the index of task");
        while (!parseInt(index) && parseInt(index) !== 0) {
            index = prompt("Enter the index of task");
        }
        todoList.splice(index, 1);
        console.log("Task deleted successfully");
    } else if (input.toLowerCase() === "delete" && todoList.length <= 0) {
        console.log("There is nothing in there!");
    } else if (input.toLowerCase() === "quit") {
        console.log("OK, quitting!");
        break;
    } else {
        console.log("Please enter a valid command!");
    }
}