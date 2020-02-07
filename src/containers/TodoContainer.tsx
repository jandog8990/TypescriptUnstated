import { Container } from 'unstated';
import { Todo } from '../interfaces/Todo';

interface TodoState {
    todos: Todo[]
}

export default class TodoContainer extends Container<TodoState> {
    state: TodoState = {
        todos: []
    }

    id = 0;

    addTodo = (todo: string) => {
        const newTodo = { id: this.id++, marked: false, description: todo };
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
      };

    removeTodo = (id: number) => {
        this.setState({
          todos: this.state.todos.filter((todo) => todo.id !== id)
        });
      };
    
    markTodo = (id: number) => {
        this.setState({
          todos: this.state.todos.map(todo => {
            if (todo.id !== id) {
              return todo;
            } else {
              return { ...todo, marked: !todo.marked };
            }
          })
        });
      };
}