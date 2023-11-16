import { View, TouchableOpacity, Image, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from "@react-navigation/native";

export type Props = {
  showBackButton?: boolean;
  showImageLogo?: boolean;
}

export function Header ({ showBackButton = false, showImageLogo = true }: Props){
  const navigation = useNavigation()
  
  return (
    <View className="z-20 w-full py-3 bg-white">
      <View className={`flex flex-row w-[90%] items-center ${showBackButton && 'justify-between'} mx-auto `}>
        {
          showBackButton ? 
              <TouchableOpacity onPress={()=>navigation.goBack()} className="flex">
                <AntDesign name="left" size={28} color="#1175B6" />
              </TouchableOpacity>

              : <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} className="flex -mr-2">
                  <AntDesign name="menufold" size={32} color="#1175B6" />
                </TouchableOpacity>
        }
        {/* {
          showImageLogo && <Image className=" w-[90px] h-[55px] mx-auto" source={logoimg} />
        } */}
      </View>
    </View>
  );
} 