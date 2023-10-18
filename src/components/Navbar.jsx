
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tickets from '../Screens/Tickets';
import MainStackScreen from '../StackScreens/MainStackScreen';
import Notifications from '../Screens/Notifications';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@ui-kitten/components';



const Tab = createBottomTabNavigator();

const Navbar=()=> {
  const theme = useTheme();

  
    return (
      <Tab.Navigator initialRouteName="Inicio" backBehavior="initialRoute" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Tickets" component={Tickets} 
        options={({ navigation }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="ticket-alt" color={navigation.isFocused() ? theme['primary1'] : 'gray'} size={23} />
          ),
        })}/>
        <Tab.Screen name="Inicio" component={MainStackScreen} 
        options={({ navigation }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={navigation.isFocused() ? theme['primary1'] : 'gray'} size={30} />
          ),
        })}/>
        <Tab.Screen name="Notifications" component={Notifications}
        
        options={({ navigation }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={navigation.isFocused() ? theme['primary1'] : 'gray'} size={25} />
          ),
        })}/>
      </Tab.Navigator>
    );
  }

export default Navbar