import { createStackNavigator } from '@react-navigation/stack';
const MainStack = createStackNavigator();

import Main from '../Screens/Main';
import Boliches from '../Screens/Boliches';

const MainStackScreen=()=> {
    return (
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Home" component={Main} />
        {/* Otras pantallas de Main Van Aqui */}
        <MainStack.Screen name='Boliches' component={Boliches} />
      </MainStack.Navigator>
    );
  }
export default MainStackScreen