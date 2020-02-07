import React from 'react';

import {
    View,
    Button,
    Text
} from 'react-native';

import {
    CardStyleInterpolators,
    NavigationStackScreenProps,
    StackCardStyleInterpolator,
} from 'react-navigation-stack';

export default class DetailsScreen extends React.Component<NavigationStackScreenProps> {
    render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to List"
          onPress={() => this.props.navigation.navigate('List')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go back to all examples"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}