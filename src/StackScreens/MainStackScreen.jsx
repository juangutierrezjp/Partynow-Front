import { createStackNavigator } from '@react-navigation/stack';
const MainStack = createStackNavigator();

import Main from '../Screens/Main';
import Locals from '../Screens/Locals';
import Events from '../Screens/Events';
import Organizers from '../Screens/Organizers';
import Explore from '../Screens/Explore';

const MainStackScreen=()=> {
    return (
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Home" component={Main} />
        {/* Otras pantallas de Main Van Aqui */}
        <MainStack.Screen name='Locals' component={Locals} />
        <MainStack.Screen name='Events' component={Events} />
        <MainStack.Screen name='Organizers' component={Organizers} />
        <MainStack.Screen name='Explore' component={Explore} />


      </MainStack.Navigator>
    );
  }
export default MainStackScreen