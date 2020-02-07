import React from 'react';

import {
    View,
    Button,
    Switch,
    Text
} from 'react-native';

import {
    CardStyleInterpolators,
    NavigationStackScreenProps,
    StackCardStyleInterpolator,
} from 'react-navigation-stack';

export default class ListScreen extends React.Component<
    NavigationStackScreenProps,
    {isInverted: boolean}> {
        
    static navigationOptions = {
        title: 'This Modal',
    };

    state = { isInverted: false };

    onSwitch = () => this.setState(prevState => ({ isInverted: !prevState.isInverted }));

    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>List Screen</Text>
            <Text>A list may go here</Text>
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button
              title="Go back to all examples"
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Text>Invert modal gesture direction:</Text>
            <Switch
              style={{ margin: 10 }}
              onValueChange={this.onSwitch}
              value={this.state.isInverted}
            />
            <Button
              title="Show Modal"
              onPress={() =>
                this.props.navigation.push('Modal', {
                  gestureDirection: this.state.isInverted
                    ? 'vertical-inverted'
                    : 'vertical',
                })
              }
            />
          </View>
        );
      }
}