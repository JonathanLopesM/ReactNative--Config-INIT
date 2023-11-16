import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function ClientStackRoutes () {
  return (
  <Navigator >
    <Screen
      name="home"
      options={{headerShown: false}}
      component={Home}
     />
  </Navigator>
  )
};