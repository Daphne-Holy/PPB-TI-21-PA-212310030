import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Home from './src/praktikum-4/Home';
import MyFriends from './src/praktikum-4/Friends/MyFriends';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SignIn } from './src/praktikum-4/Friends/widgets/SignIn';
import { Login } from './src/praktikum-4/Friends/widgets/Login';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
            <Stack.Navigator>
            
            {/* <Stack.Screen name="Sign In" options={{title: "Sign-In"}} component={SignIn}/> */}
            <Stack.Screen name="Login" options={{title: "Login"}} component={Login}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Tab.Screen name="Home" component={Home}/>
            
            </Stack.Navigator>
        </NavigationContainer>
  );
}


function Dashboard({navigation}){
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={MyFriends}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
