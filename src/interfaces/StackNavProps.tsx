import { NavigationStackProp } from 'react-navigation-stack';
import TodoContainer from '../containers/TodoContainer';

// Type for storing the container to be shared
export interface StackNavProps {
    navigation: NavigationStackProp,
    todoContainer: TodoContainer
}
//   type StackNavProps = {
//     todoContainer: TodoContainer
//   }