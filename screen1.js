import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

 function ScreenOne({navigation}) {
  return (
    <View>
      <Text>Screen 1</Text>
      <Button title="Go To Screen2" onPress={()=>{

navigation.navigate('page2');
}}></Button>

</View>
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


export default ScreenOne;