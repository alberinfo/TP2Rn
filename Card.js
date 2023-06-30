import { StyleSheet, Image, Text, View } from "react-native";

export default function CardJS({imageUrl, Description}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: imageUrl}}/>
            <Text style={styles.desc}>{Description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: "95%",
      height: "30%",
      backgroundColor: 'green',
      borderRadius: "20px",
      alignItems: "center"
    },
    image: {
        width: "100%",
        height: "85%"
    },
    desc: {
        marginTop: "5px",
        color: "white",
        fontWeight: "bold"
    }
  });