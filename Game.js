import "./global.css";
import { Text, View, ScrollView } from "react-native";
import useFontsLoader from "./src/FontsLoader";
import ExitButton from "./src/components/ExitButton";
import Table from "./src/components/Table";

export default function App() {
  const fontsLoaded = useFontsLoader();
  if (!fontsLoaded) return null;

  return (
    <ScrollView>
      <View className="flex-1 items-center justify-center bg-salmon gap-20">
        <View>
          <Text className="text-7xl font-bold text-darkblue font-pixel">
            Sudoku Genius
          </Text>
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
