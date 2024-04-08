import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
  useWindowDimensions,
  Image,
  Easing,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {getCurrentColor} from './utils';
import WinnerModal from './WInnerModal';

const Wheel = () => {
  return (
    <View style={styles.circleRow}>
      <Image
        source={require('./assets/wheel.png')}
        alt="Wheel"
        style={styles.imageStyle}
      />
    </View>
  );
};

const CircleWheel = () => {
  const {width, height} = useWindowDimensions();
  const animationRef = useRef<LottieView>(null);
  const [spinValue] = useState(new Animated.Value(0));
  const [winner, setWinner] = useState<string | undefined>();
  const [modalVisible, setModalVisible] = useState(false);

  const spin = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const startAnimation = (rotationValue: number, lastValue: number) => {
    const value = lastValue + 500;
    Animated.timing(spinValue, {
      toValue: value,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      rotationValue += -1;
      if (rotationValue > 0) {
        startAnimation(rotationValue, value);
      } else {
        setWinner(getCurrentColor(parseInt(value.toFixed(), 10)));
        setModalVisible(true);
        animationRef.current?.play();
      }
    });
  };

  return (
    <>
      <View
        style={[
          styles.circleContainer,
          {width: width * 0.75, height: width * 0.75},
        ]}>
        <View style={styles.pointer} />
        <Animated.View
          style={[
            styles.circle,
            {
              width: width * 0.75,
              height: width * 0.75,
              borderRadius: (width * 0.75) / 2,
              transform: [{rotate: spin}],
            },
          ]}>
          <Wheel />
        </Animated.View>
      </View>
      <LottieView
        ref={animationRef}
        source={require('./assets/confetti.json')}
        loop={false}
        style={{
          width: width,
          height: height,
          position: 'absolute',
        }}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.buttonStyle,
            {
              backgroundColor: `rgba(69, 191, 255,${!!winner ? 0.5 : 1})`,
            },
          ]}
          disabled={!!winner}
          onPress={() => {
            const RandomNumber = Math.floor(Math.random() * 1000);
            startAnimation(Math.floor(Math.random() * 7) + 4, RandomNumber);
          }}>
          <Text style={{color: 'white'}}>Spin The Wheel</Text>
        </Pressable>
        <Pressable
          style={[
            styles.buttonStyle,
            {
              backgroundColor: 'rgb(165, 42, 42)',
            },
          ]}
          onPress={() => {
            setWinner(undefined);
            spinValue.setValue(0);
            animationRef.current?.pause();
          }}>
          <Text style={{color: 'white'}}>Reset Wheel</Text>
        </Pressable>
      </View>
      <WinnerModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        winner={winner ?? ''}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
  },
  infoBox: {
    marginTop: 15,
    height: 40,
    justifyContent: 'space-between',
  },
  circleRow: {width: '100%', height: '100%'},
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: '#ced4da',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointer: {
    width: 10,
    height: 30,
    backgroundColor: 'black',
    position: 'absolute',
    top: -15,
    borderWidth: 2,
    borderColor: 'white',
    zIndex: 6000,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonStyle: {padding: 10, borderRadius: 5},
  imageStyle: {height: '100%', width: '100%', objectFit: 'cover'},
});

export default CircleWheel;
