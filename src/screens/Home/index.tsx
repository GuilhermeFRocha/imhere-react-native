import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {}
  return (
    <View style={styles.container}>
      <Text style={styles.eventDate}>31/12/1998</Text>
      <Text style={styles.eventName}>Guilherme</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
