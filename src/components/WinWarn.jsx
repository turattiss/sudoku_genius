import { Modal, View, Image, StyleSheet } from "react-native";
import ExitButton from "./ExitButton";

export default function WinWarn({ visible, onExit }) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Image
            source={require("../../assets/images/WinWarn.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <ExitButton />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});
