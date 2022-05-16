import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function Screen3({navigation}) {

  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Screen 3</Text>
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
