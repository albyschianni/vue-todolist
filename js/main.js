// riprodurre la ToDoList come viste insieme questa mattina,
// ma con una struttura di array di oggetti e non un array di semplici stringhe.
// l’array di oggetti di partenza può essere una cosa così:


const { createApp } = Vue

createApp ({
    data (){
        return {
            error: false,
            message: "",
            newTask: "",
            tasks: [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
                ]
        }
    },
    methods: {
        addTask(){
            if (this.newTask.length < 5 || this.newTask === ''){
                this.error = true;
            } else {
                this.tasks.unshift({text:this.newTask});
                this.error = false;
            }
            
            this.newTask = "";
        },
        deleteTask(indiceArgomento){
            this.tasks.splice(indiceArgomento, 1);
        }
    }
}).mount("#app");

