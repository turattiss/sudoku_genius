import { useFonts } from 'expo-font';

export default function useFontsLoader() {
  const [fontsLoaded] = useFonts({
    pixel: require('../assets/fonts/Jersey10-Regular.ttf'),
  });

  return fontsLoaded; 
}