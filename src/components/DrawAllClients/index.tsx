import { SafeAreaView, Text, TouchableOpacity, View, Image} from "react-native"
import { Feather, FontAwesome } from '@expo/vector-icons';

import { DrawerActions, useNavigation } from "@react-navigation/native";

export const DrawAllClients = () => {

  const navigation = useNavigation()

  function handleGoToLogin (){
    navigation.dispatch(DrawerActions.closeDrawer())
    // navigation.navigate("login")
  }


return (

  <SafeAreaView className="flex h-full">
    <View className="w-full "> 
        {/* <Image className=" mx-auto w-[90px] h-[55px] mb-5" source={logoimg} /> */}
      
        <View className="flex py-20 w-full border-y-2 border-blue-500 bg-blue-900 bg-[url(../../assets/backgroundlines.png)] items-center ">

              <View className="flex border-2  border-white rounded-full w-26 p-4">
                <FontAwesome className="flex border" name='users' color={'white'} size={60} />
              </View>
              <Text className="flex text-xl font-bold text-white mt-10 border border-white w-full text-center py-5">
                MENU
              </Text>
              <Text className="text-white mt-5 text-xl">
                Descrição de menu
              </Text>

            </View> 

    </View>
    <View className=" my-10 h-20 items-center justify-center">
      <TouchableOpacity onPress={handleGoToLogin} 
      className=" px-5 py-2 rounded-xl border-2 border-blue-400 bg-blue-500">
        <Text className="text-xl text-white font-bold">
          Acesso restrito
        </Text>
      </TouchableOpacity>
    </View>
      
    
  </SafeAreaView>
)
}
