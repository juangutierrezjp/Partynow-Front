import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tickets from '../Screens/Tickets';
import MainStackScreen from '../StackScreens/MainStackScreen';
import Notifications from '../Screens/Notifications';

const Tab = createBottomTabNavigator();

const Navbar=()=> {
    return (
      <Tab.Navigator initialRouteName="Inicio" backBehavior="initialRoute" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Tickets" component={Tickets} />
        <Tab.Screen name="Inicio" component={MainStackScreen} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    );
  }

export default Navbar