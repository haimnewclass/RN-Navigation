import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer}  from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenOne from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
<>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='page1'  component={ScreenOne}/>
      <Stack.Screen name='page2'  component={Screen2}/>
      <Stack.Screen name='page3'  component={Screen3}/>
      </Stack.Navigator>
    </NavigationContainer>
</>
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


// npm install @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/stack
// npm install react-native-gesture-handler
// npm install @react-native-masked-view/masked-view
// npm install @react-navigation/native-stack