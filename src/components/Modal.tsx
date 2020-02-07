import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';

import {
    CardStyleInterpolators,
    NavigationStackScreenProps,
    StackCardStyleInterpolator,
} from 'react-navigation-stack';

  const gestureResponseDistance = {
    vertical: Dimensions.get('window').height,
  };
  
  const forVerticalInvertedIOS: StackCardStyleInterpolator = ({
    current: { progress },
    layouts: { screen },
  }) => {
    const translateY = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [-screen.height, 0],
    });
  
    return {
      cardStyle: {
        transform: [
          // Translation for the animation of the current card
          { translateY },
        ],
      },
    };
  };

export default class Modal extends React.Component<NavigationStackScreenProps> {

  static navigationOptions = ({ navigation }: NavigationStackScreenProps) => {
    return {
      title: 'Modal',
      cardStyleInterpolator:
        navigation.getParam('gestureDirection', 'vertical') ===
        'vertical-inverted'
          ? forVerticalInvertedIOS
          : CardStyleInterpolators.forVerticalIOS,
      gestureDirection: navigation.getParam('gestureDirection', 'vertical'),
      cardTransparent: true,
      gestureResponseDistance,
    };
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 20,
          paddingHorizontal: 20,
          height: Dimensions.get('screen').height,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        }}
      />
    );
  }
}