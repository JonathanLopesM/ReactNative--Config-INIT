import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../screens/Feed';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes () {
  return (
  <Navigator >
    <Screen
      name="materias"
      options={{headerShown: false}}
      component={Feed}
     />
    
  </Navigator>
  )
};