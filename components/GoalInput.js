import { useState } from "react";
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder="Kurs Hedefleriniz"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="İptal" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Hedef Ekle"
              onPress={addGoalHandler}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
    backgroundColor: "#e4d0ff",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
