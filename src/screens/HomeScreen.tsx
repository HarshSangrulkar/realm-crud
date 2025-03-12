import { View, Text, Button } from "react-native";
//import { StackScreenProps } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
    const handleNavigateToDetails = () => {
        navigation.navigate("Details", { message: "Hello from Home!" });
    };
    const handleNavigateToAbout = () => {
        navigation.navigate("About", { name: "Harsh from Hello!", age: 21 });
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={handleNavigateToDetails} />
            <Button title="Go to About" onPress={handleNavigateToAbout} />
        </View>
    );
};

export default HomeScreen;
