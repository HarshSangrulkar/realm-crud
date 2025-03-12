import { View, Text } from "react-native";
//import { StackScreenProps } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const DetailsScreen = ({ route }: Props) => {
    const { message } = route.params; // Extract message from parameters

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Details Screen</Text>
            <Text>Message: {message}</Text>
        </View>
    );
};

export default DetailsScreen;
