import { Text, View, StyleSheet, Button } from "react-native"

const AboutScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen Display</Text>
            <Button title="Go To Home Page" onPress={() => navigation.navigate("Home")}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        margin: 10,

    }
})

export default AboutScreen;