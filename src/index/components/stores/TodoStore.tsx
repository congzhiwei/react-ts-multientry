
class TodoStore {
    todos: any = []

    get completedTodoCount() {
        return this.todos.filter(
            (todo: { completed: boolean; }) => todo.completed === true
        ).length
    }

    report(){
        if(this.todos.length === 0)
            return "<none>"
        return `Next todo: "${this.todos[0].task}". ` + `Progress: ${this.completedTodoCount}/${this.todos.length}`
    }

    addTodo(task: any){
        this.todos.push({
            task,
            completed: false,
            assigness: null
        })
    }
}

export default TodoStore;