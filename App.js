import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import CardJS from './Card.js';
//https://img.freepik.com/vector-premium/insignia-cafeteria-estilo-vintage_476121-79.jpg
export default function App() {
  return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./imgs/central_perk_logo.jpeg')}/>
        <View style={{height: "100%", alignContent: "center"}}>
          <Text>Try some of our most popular flavours!</Text>
          <CardJS imageUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg" Description="LMAO"></CardJS>
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: "80%",
    height: "25%"
  },
});
