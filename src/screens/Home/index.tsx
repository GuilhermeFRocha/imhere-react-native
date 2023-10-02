import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = ["Guillherme", "Gabriel", "Thiago"];

  function handleParticipantAdd() {
    console.log("Voce cliclou em adicionar");
  }
  function handleParticipantRemove(name: string) {
    console.log(`Voce clicou em remover o ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventDate}>31/12/1998</Text>
      <Text style={styles.eventName}>Gbariel</Text>
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("Guilherme")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>NImguem chegou ainda</Text>
        )}
      />
    </View>
  );
}
