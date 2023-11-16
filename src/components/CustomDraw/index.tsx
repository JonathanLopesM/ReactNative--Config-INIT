import { StyleSheet,SafeAreaView, Text, View} from "react-native"
import {Image} from "expo-image"
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export const CustomDraw = () => {
  const {  } = useContext(AuthContext)
  const navigation = useNavigation()

  const [logout, setLogout ] = useState()
  const [perfil, setPerfil ] = useState({
    name: 'nome',
    username: 'username',
  })

  function handleLogout () {
    navigation.dispatch(DrawerActions.closeDrawer())
    // logout()
  }

return (

  <SafeAreaView className="flex justify-between h-full">
    <View className="w-full "> 
        {/* <Image className=" mx-auto w-[90px] h-[55px] mb-5" source={logoimg} /> */}

        <View className="flex pt-20 w-full bg-blue-900 bg-[url(../../assets/backgroundlines.png)] items-center gap-4 ">

              <View className="flex border-2 border-white rounded-full w-20 p-2">
                <Feather className="flex border" name='user' color={'white'} size={60} />
              </View>
              <Text className="flex text-2xl font-bold text-white">
                {perfil.username}
              </Text>
            </View> 
    </View>
      
        <View className="flex w-full items-center justify-center mb-10">
          <TouchableOpacity onPress={handleLogout} className="flex w-full border rounded-md px-14">
            <Text className="flex text-xl">
              Sair
            </Text>
          </TouchableOpacity>

        </View> 
      
    
  </SafeAreaView>
)
}
