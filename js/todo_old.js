var todos = ["ein Todo"];

var input = prompt("Was möchtes Du machen?");

while (input !== "quit"){
    if (input === "list"){
        listTodos();
    }else if (input === "new"){
        addTodo();
    }else if(input==="delete"){
        deleteTodo();
    }
    input = prompt("Was möchtes Du machen?");
}

console.log("Vielen Dank");

function listTodos(){
     console.log("++++++++");
        todos.forEach(function(todos, i){
            console.log(i + ": "+ todos);
    });
    console.log("++++++++");    
}

function addTodo(){
    var newTodo = prompt("Neue Todo hinzufügen");
   todos.push(newTodo);
   console.log("Todo hinzugefügt");   
}

function deleteTodo(){
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Todo gelöscht");
}