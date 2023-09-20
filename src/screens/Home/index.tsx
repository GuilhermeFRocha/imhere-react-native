import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventDate}>31/12/1998</Text>
      <Text style={styles.eventName}>Guilherme</Text>
    </View>
  );
}
