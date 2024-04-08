import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {WinningInfo} from './utils';

interface WinnerModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const InfoModal = ({modalVisible, closeModal}: WinnerModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        closeModal();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.headerText}>Winning Info</Text>
            <Pressable onPress={closeModal}>
              <Text style={{color: 'red', fontSize: 15}}>Close X</Text>
            </Pressable>
          </View>
          {WinningInfo.map((item, index) => {
            return (
              <View key={index + 'winning'} style={styles.itemView}>
                <Text
                  style={[
                    styles.textStyle,
                    {color: `${item.color.toLowerCase()}`},
                  ]}>
                  {item.color}
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    {color: `${item.color.toLowerCase()}`},
                  ]}>
                  {item.win}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    zIndex: 101,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgb(255,255,255)',
    width: '80%',
    maxWidth: 500,
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    zIndex: 101,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});

export default InfoModal;
