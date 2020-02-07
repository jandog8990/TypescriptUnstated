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
import { createAppContainer, NavigationScreenProp /*, NavigationState*/ } from 'react-navigation';
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
import { StackNavProps } from './src/interfaces/StackNavProps';


const todoContainer = new TodoContainer();

/*
type Navigation = NavigationStackScreenProps<NavigationState>;
type NavProps = {
  navigation: NavigationStackScreenProps<NavigationState>,
  todoProps: TodoProps
}
*/

export default class MainApp extends Component<NavProps, any> {
  constructor(props:NavProps) {
    super(props);

    this.props.
  }

  render() {
    return(
      <AppContainer navigation={this.props.navigation} todoProps={this.props.todoProps} />
    )
  }
}

const AppContainer = ({ navigation, todoProps}: NavProps) => (
// export default class App extends Component<NavProps> {
// export default class App extends Component {
  // render() {
  //   return (
    <Provider inject={[todoContainer]}>
      <Subscribe to={[TodoContainer]}>
        {(todoContainer: TodoContainer) => (
          <StackNav navigation={navigation} {...todoProps.todoContainer=todoContainer} todoProps={todoProps}  />
        )} 
      </Subscribe>
    </Provider>

  //   );
  // }

  // Provider component stores container instances and allows children to 
  // subscribe to the instances. Top level will subscribe to container
  /*
  render() {
    return (
      <Provider inject={[todoContainer]}>
        <AddTodo/>
        <Todos/>
      </Provider>
    );
  }
  */

  /*
  render() {
    return <AppContainer/>;
  }
  */

  // <WordList/>
  /*
  render() {
    return (
      <Provider>
      <>
        <StatusBar barStyle="dark-content" />

            <Sentence/>

            <Text style={{marginTop: 20}} />

      </>
      </Provider>
    );
  }
  */
)
// }
// export default App;

// Create the main stack navigator for the app using Class Component format
// export class StackNav extends Component<TodoProps, any> {
export class StackNav extends Component<NavProps, any> {
  
  stackNav = createStackNavigator({
    AddTodo: {
      screen: (props: NavProps) => <AddTodo {...props} todoContainer={props.todoProps.todoContainer} />
    },
    Todos: {
      screen: (props: NavProps) => <Todos {...props} todoContainer={props.todoProps.todoContainer} />

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
