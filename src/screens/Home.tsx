import { View, Text } from "react-native";
import { Header } from "../components/Header/index";


export function Home () {
  return (
    <View className="flex-1 bg-background">
      <Header />
      <Text className="text-white">
      Na home aqui
      </Text>

    </View>
  )
}