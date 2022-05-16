import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

export default function Screen2({navigation,route}) {

  const nav = useNavigation();
  const rout = useRoute();

  const itemDetails = rout.params ;
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
      <Text>Item:{itemDetails.code} {itemDetails.name} </Text>
      <Text>Item:{route.params.code} {route.params.name} </Text>
      <Button title="Goto Page3" onPress={()=>{

      nav.navigate('page3');
//navigation.goBack();
}}></Button>
      <Button title="Back" onPress={()=>{

nav.goBack();
//navigation.goBack();
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
