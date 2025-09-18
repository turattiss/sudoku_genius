import "./global.css";
import { Text, View } from "react-native";
import useFontsLoader from './src/FontsLoader';
import StartButton from "./src/components/StartButton";

export default function App() {
  const fontsLoaded = useFontsLoader(); 
  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 items-center justify-center bg-salmon gap-20">
      <View>
        <Text className="text-7xl font-bold text-darkblue font-pixel">
        Sudoku Genius
      </Text>
      </View>
      <View>
        <StartButton />
      </View>
    </View>
  );
}
