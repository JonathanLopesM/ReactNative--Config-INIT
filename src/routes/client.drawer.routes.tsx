import { createDrawerNavigator } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';
import { Menu } from '../screens/Menu';
import { ClientStackRoutes } from './client.stack.routes';
import { DrawAllClients } from '../components/DrawAllClients';

const Drawer = createDrawerNavigator();

export function ClientsDrawerRoutes (){
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} 
      drawerContent={() => <DrawAllClients /> }>
      <Drawer.Screen
        name='AcessoClientes'
        component={ClientStackRoutes} // para adicionar a Tab bar mudar aqui para TabRoutes
        options={{
          drawerIcon: ({ color, size }:any)=> <Feather name='home' color={color} size={size} />,
          drawerLabel: 'Inicio Clientes'
        }}
       />
       <Drawer.Screen
        name='perfilClientes'
        component={Menu}
        options={{
          drawerIcon: ({ color, size }:any)=> <Feather name='user' color={color} size={size} />,
          drawerLabel: 'Perfil clientes'
        }}
       />
    </Drawer.Navigator>
  )
}