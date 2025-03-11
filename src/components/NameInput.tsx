import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { addUser, getAllUsers } from "../realmDB/realmCRUD";
import { User } from "../realmDB/realmConfig";

// Interface for props (Defining the function inside)
// interface NameInputProps {
//     onSubmit: (enteredName: string, enteredAge: number) => void;
// }

interface InputProps {
    setUser: (users: User[]) => void;
}
//{ onSubmit }: NameInputProps
const NameInput = ({ setUser }: InputProps) => {
    //const [input, setInput] = useState<string>("");
    //const [age, setAge] = useState<string>("");
    //const [user, setUser] = useState<User[]>([]);
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");


    // useEffect(() => {
    //     setUser([...getAllUsers()]);
    // }, []);

    // Function to handle submit (calls parent function)
    const handleSubmit = async () => {
        const ageNumber = parseInt(age, 10);//10 means its decimal
        //Math.random().toString(), 
        await addUser(name, ageNumber);
        const updatedUsers = await getAllUsers();
        setUser(updatedUsers);
        setName(""); // Clear input field after submission
        setAge("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName} // Local state updates on every keystroke
            />
            <TextInput
                style={styles.input}
                placeholder="Enter you age"
                value={age}
                onChangeText={setAge}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
    },
});

export default NameInput;
