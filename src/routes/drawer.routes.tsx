import { createDrawerNavigator } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';

import { TabRoutes } from './tab.routes';
import { Button } from 'react-native';
import { Menu } from '../screens/Menu';
import { CustomDraw } from '../components/CustomDraw';
// import { Header } from '../Components/Header';
import { StackRoutes } from './stack.routes';

const Drawer = createDrawerNavigator();

export function DrawerRoutes (){
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} 
      drawerContent={() => <CustomDraw /> }>
      <Drawer.Screen
        name='SESSÃO PLENÁRIA'
        component={StackRoutes} // para adicionar a Tab bar mudar aqui para TabRoutes
        options={{
          drawerIcon: ({ color, size }:any)=> <Feather name='home' color={color} size={size} />,
          drawerLabel: 'Inicio'
        }}
       />
       <Drawer.Screen
        name='menu'
        component={Menu}
        options={{
          drawerIcon: ({ color, size }:any)=> <Feather name='user' color={color} size={size} />,
          drawerLabel: 'menu'
        }}
       />
    </Drawer.Navigator>
  )
}