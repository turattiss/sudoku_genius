import { Text, View, ScrollView, StyleSheet } from "react-native";
import useFontsLoader from "./src/FontsLoader";
import ExitButton from "./src/components/ExitButton";
import Table from "./src/components/Table";

export default function App() {
  const fontsLoaded = useFontsLoader();
  if (!fontsLoaded) return null;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Sudoku Genius</Text>
        </View>
        <View>
          <Table />
        </View>
        <View>
          <ExitButton />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e29578", // salmon
    paddingVertical: 40,
  },
  title: {
    fontSize: 48, // text-7xl
    fontWeight: "bold",
    color: "#006d77", // darkblue
    fontFamily: "pixel", // corresponde ao font-pixel do hook
    textAlign: "center",
  },
});
