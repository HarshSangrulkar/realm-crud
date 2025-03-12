import { Text, View, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

type Props = NativeStackScreenProps<RootStackParamList, "About">;

const AboutScreen = ({ navigation, route }: Props) => {
    const { name } = route.params;
    const { age } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen Display</Text>
            <Text style={styles.text}>My Name is {name}</Text>
            <Text style={styles.text}>My Age is {age}</Text>
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