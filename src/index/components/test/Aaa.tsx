import React, {Component} from 'react';

import 'antd/dist/antd.css';

import TodoStore from "../stores/TodoStore";

const todoStore = new TodoStore();
todoStore.addTodo("read MobX tutorial");
console.log(todoStore.report());

todoStore.addTodo("try MobX");
console.log(todoStore.report());

todoStore.todos[0].completed = true;
console.log(todoStore.report());

todoStore.todos[1].task = "try MobX in own project";
console.log(todoStore.report());

todoStore.todos[0].task = "grok MobX tutorial";
console.log(todoStore.report());

class Aaa extends Component<any, any> {

    render() {
        return (
           <div>
               hello aaa
           </div>
        );
    }
}
export default Aaa;