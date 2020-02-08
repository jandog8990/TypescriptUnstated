import React from 'react';
import { Subscribe } from 'unstated';

import {
    TextInput,
    View,
    Button
} from 'react-native';

import TodoContainer from '../containers/TodoContainer';
import { TodoProps } from 'src/interfaces/TodoProps';
import { NavProps } from 'src/interfaces/NavProps';
// import { StackNavProps } from 'src/interfaces/StackNavProps';

// Interface for storing the container to be shared
// type StackNavProps = {
//   todoContainer: TodoContainer
// }
interface ThisProps extends NavProps, TodoProps {};

// type NavProps = {
//   navigation: NavigationStackProp<StackNavProps>
// }

export default class AddTodo extends React.Component<ThisProps, any> {
  state = {
    todoText: ""
  }

  // Set the states and functions from the container
  // const { todoStore, { state: { todos } } } = this.prop

  handleClick = (addTodo: any) => {
    if (this.state.todoText != "") {
        addTodo(this.state.todoText);
        this.setState({todoText: ""})
      }
  };

  // <input type="text" placeholder="your new todo" ref={this.inputRef} />
  render() {
    // const { todoStore, { state: { todos } } } = this.props
    const { navigation, todoContainer, todoContainer:  { state: { todos } } }  = this.props;

    console.log("Todos from TodoContainer:");
    console.log(todos);
    console.log("\n");

    console.log("Navigation from Props:");
    console.log(navigation);
    console.log("\n");

    /*
    <Subscribe to={[TodoContainer]}>
    {(todoContainer: TodoContainer) => (
      <Button title="Add" onPress={() => this.handleClick(todoContainer.addTodo)} />
    )}
    </Subscribe>
    */

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <TextInput
            onChangeText={(text: String) => this.setState({todoText: text})}
            placeholder="Enter todo here..."
            value={this.state.todoText}
        />

        <Button title="Add" onPress={() => this.handleClick(todoContainer.addTodo)} />
        <Button title="Go to Todos" onPress={() => navigation.navigate('Todos')} />
      </View>
    );
  }
}