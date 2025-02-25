import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from './screens/LandingPage';
import Login from './screens/Login';
import Home from './screens/Home';
import AddNewHabit from './screens/AddNewHabit';
import { HabitProvider } from './context/HabitContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <HabitProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Landing' component={LandingPage} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='AddNewHabit' component={AddNewHabit} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </HabitProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
