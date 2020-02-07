import React from 'react';
import { Subscribe } from 'unstated';
import { Todo } from '../interfaces/Todo';

import {
    TextInput,
    View,
    Button,
    Text,
    FlatList,
    TouchableHighlight
} from 'react-native';

import TodoContainer from '../containers/TodoContainer';
import { TodoProps } from 'src/interfaces/TodoProps';

export default class Todos extends React.Component<TodoProps, any> {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Subscribe to={[TodoContainer]}>
                {(todoContainer: TodoContainer) => (
                    <FlatList
                        data={todoContainer.state.todos}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableHighlight onPress={() => todoContainer.markTodo(item.id)}>
                                    <Text>{ item.description }</Text>
                                </TouchableHighlight>
                                <Button title="X" onPress={() => todoContainer.removeTodo(item.id)}/>
                            </View>
                        )}
                    />
                )}
                </Subscribe>
            </View>
        );
    }
}