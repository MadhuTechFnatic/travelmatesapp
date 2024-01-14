import React, { Children, useEffect } from 'react';
import { View, Animated, Text } from 'react-native';

const FadeInAnimation = ({children}) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    const fadeIn = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    });

    const fadeOut = Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    });

    // Create a loop by using Animated.loop
    const loop = Animated.loop(
      Animated.sequence([fadeIn, fadeOut])
    );

    loop.start(); // Start the continuous loop

    // Stop the animation loop when the component unmounts
    return () => loop.stop();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
        {children}
    </Animated.View>
  );
};

export default FadeInAnimation;
