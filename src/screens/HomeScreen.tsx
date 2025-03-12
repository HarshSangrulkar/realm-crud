import { Button, StyleSheet, Text, View } from "react-native"

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen Display</Text>
            <Button title="Go To About Page" onPress={() => navigation.navigate("About")}></Button>
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

export default HomeScreen;