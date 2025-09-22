import { Text, View, StyleSheet } from "react-native";
import useFontsLoader from './src/FontsLoader';
import StartButton from "./src/components/StartButton";

export default function App() {
  const fontsLoaded = useFontsLoader(); 
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Sudoku Genius</Text>
      </View>
      <View>
        <StartButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e29578", // salmon
    paddingVertical: 40,
    gap: 20, // caso dê erro, substitua por marginBottom nos filhos
  },
  title: {
    fontSize: 48, // equivalente a text-7xl
    fontWeight: "bold",
    color: "#006d77", // darkblue
    fontFamily: "pixel", // font carregada pelo hook
    textAlign: "center",
  },
});
