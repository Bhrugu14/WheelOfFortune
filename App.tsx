import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CircleWheel from './WheelOfFortune';
import InfoModal from './InfoModal';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [infoModal, setInfoModal] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? 'white' : 'black'}
      />
      <View style={styles.container}>
        <InfoModal
          closeModal={() => setInfoModal(false)}
          modalVisible={infoModal}
        />
        <Pressable
          onPress={() => {
            setInfoModal(true);
          }}
          style={styles.infoButton}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>i</Text>
        </Pressable>
        <Text style={styles.headerText}>{'Wheel Of Fortune'}</Text>
        <CircleWheel />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  headerText: {marginBottom: 20, fontSize: 20, fontWeight: 'bold'},
  infoButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 15,
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
});

export default App;
