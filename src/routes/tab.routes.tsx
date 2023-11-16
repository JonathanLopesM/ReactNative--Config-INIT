import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import New from '../screens/New';
import { StackRoutes } from './stack.routes';

const Tab = createBottomTabNavigator();

export function TabRoutes(){
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen 
        name='home'
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size })=> <Feather name='home' color={color} size={size} />,
          tabBarLabel: 'Matérias'
        }}
      />
      <Tab.Screen 
        name='new'
        component={New}
        options={{
          tabBarIcon: ({ color, size })=> <Feather name='plus' color={color} size={size} />,
          tabBarLabel: 'Novo'
        }}
      />
    </Tab.Navigator>
  )
}