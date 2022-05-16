import { StatusBar } from 'expo-status-bar';
import { Pressable, FlatList, Button, StyleSheet, Text, View } from 'react-native';
import {ITEMS} from './Items.js';
import {useNavigation} from '@react-navigation/native';

 function ItemsScreen({navigation}) {

  const nav = useNavigation();
  function renderItemFunc(o)
  {
  return(
    <View>
    <Pressable onPress={()=>{
    //alert(o.item.name);
    console.log(o.item);
    nav.navigate('page2',o.item);
    }}>
  <View style={styles.itemLine}>    
    
    <Text>{o.item.code}</Text>
    <Text>{o.item.name}</Text>
    </View>
    </Pressable>
    </View>)
  }

  return (
    <View>
      <Text>Items Screen</Text>
      <FlatList numColumns={1}  keyExtractor={(o)=>{o.code}} renderItem={renderItemFunc} data={ITEMS}></FlatList>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },itemLine:{
    width:200,
    height:70,
    backgroundColor:'green'

  }
});


export default ItemsScreen;