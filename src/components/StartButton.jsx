import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function StartButton() {

    const router = useRouter();

  return (
    <View className="flex-2 items-center justify-center">
      <TouchableOpacity
        style={{ width: 150, height: 150 }}
        className="mt-10 items-center justify-center"
        onPress={() => router.push('/game')}
      >
        <Image
          source={require("../../assets/images/StartButton.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
