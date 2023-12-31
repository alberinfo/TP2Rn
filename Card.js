import { StyleSheet, Image, Text, View } from "react-native";

export default function CardJS({imageUrl, Description}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageUrl}/>
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
        height: "85%",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px"
    },
    desc: {
        marginTop: "5pt",
        color: "white",
        fontWeight: "bold"
    }
  });