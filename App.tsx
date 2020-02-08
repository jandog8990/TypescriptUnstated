/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Alert,
  StatusBar,
  Dimensions,
  PanResponder
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Subscribe, Provider } from 'unstated';
// import CounterContainer from './src/containers/CounterContainer';
import Sentence from './src/components/Sentence';
import WordList from './src/components/WordList';

import { createStackNavigator /*, NavigationStackScreenProps*/ } from 'react-navigation-stack';
import { createAppContainer, NavigationScreenProp, NavigationState } from 'react-navigation';
// import NavigationStackProp from 'react-navigation-stack';
// import { NavigationScreenProp, NavigationState } from 'react-navigation';

/*
import Modal from './src/components/Modal';
import ListScreen from './src/components/ListScreen';
import DetailsScreen from './src/components/DetailsScreen';
*/

import AddTodo from './src/components/AddTodo';
import Todos from './src/components/Todos';

declare var global: {HermesInternal: null | {}};

import TodoContainer from './src/containers/TodoContainer';
import { TodoProps } from './src/interfaces/TodoProps';
// import { StackNavProps } from './src/interfaces/StackNavProps';
import { NavProps } from './src/interfaces/NavProps';
// import { Todo } from 'src/interfaces/Todo';

const todoContainer = new TodoContainer();

// export default class App extends Component<NavProps, TodoProps> {
export default class App extends Component {
  constructor(props: any) {
    super(props);

    console.log("Nav props constructor:");
    console.log(this.props);
    console.log("\n");                                                                             
    // this.setTodoProps.bind(this);
  }

  render = () => {
    // const { navigation } = this.props;
    return (
    <Provider inject={[todoContainer]}>
      <Subscribe to={[TodoContainer]}>
        {(todoContainer: TodoContainer) => (
          // <StackNav navigation={navigation} todoProps={this.setTodoProps(todoProps, todoContainer)}/>
          <StackNav {...this.props} todoContainer={todoContainer}/>
        )} 
      </Subscribe>
    </Provider>
    );
  }
}

// Create the main stack navigator for the app using Class Component format
// export class StackNav extends Component<TodoProps, any> {
// export class StackNav extends Component<NavProps> {
export class StackNav extends Component<TodoProps, any> {
  constructor(props: TodoProps) {
    super(props);
  }

  stackNav = createStackNavigator({
    AddTodo: {
      screen: (props: NavProps) => <AddTodo {...props} todoContainer={this.props.todoContainer} />
    },
    Todos: {
      screen: (props: NavProps) => <Todos {...props} todoContainer={this.props.todoContainer} />
  
    }
  }, {
    initialRouteParams: AddTodo,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: 'black',
        fontWeight: 'bold',
      }
    }
  });
  AppContainer = createAppContainer(this.stackNav);
// 
  render() {
    return (
      <this.AppContainer />
    )
  }
}
  // Modal: Modal,
  /*
  const MainStack = createStackNavigator({
    AddTodo: AddTodo,
    Todos: Todos,
  }, {
    initialRouteName: 'AddTodo',
  });
  */
  // mode: 'modal',

// const AppContainer = createAppContainer(MainStack);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  contentScroll: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  }
});

// export default App;
