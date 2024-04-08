import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {WinningInfo} from './utils';

interface WinnerModalProps {
  modalVisible: boolean;
  closeModal: () => void;
  winner: string;
}

const WinnerModal = ({modalVisible, closeModal, winner}: WinnerModalProps) => {
  const findWinning = WinningInfo.find(item => item.color === winner);
  if (!findWinning) {
    closeModal();
    return null;
  }
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
          <Text style={styles.headerText}>{'Congratulations!! You Won'}</Text>
          {findWinning && (
            <Text style={styles.modalText}>{findWinning.win}</Text>
          )}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => closeModal()}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
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
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    width: '60%',
    maxWidth: 500,
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
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    zIndex: 101,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
});

export default WinnerModal;
