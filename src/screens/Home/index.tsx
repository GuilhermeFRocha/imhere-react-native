import React, { useState } from "react";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante Exiuste", `Remover participante?`);
    }
    setParticipants([...participants, participantName]);
    setParticipantName("");
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);

    const participantRemove = participants.filter((item) => {
      return item !== name;
    });
    setParticipants(participantRemove);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventDate}>31/12/1998</Text>
      <Text style={styles.eventName}>List</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={(e) => setParticipantName(e)}
          value={participantName}
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
            onRemove={() => handleParticipantRemove(item)}
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
