import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { addUser, getAllUsers, updateUser } from "../realmDB/realmCRUD";
import { User } from "../realmDB/realmConfig";

// Interface for props (Defining the function inside)
// interface NameInputProps {
//     onSubmit: (enteredName: string, enteredAge: number) => void;
// }

interface InputProps {
    setUser: (users: User[]) => void;
    currentUser?: User | null;
    setIsEditMode: (isEdit: boolean) => void;//check if in edit mode or not
}
//{ onSubmit }: NameInputProps
const NameInput = ({ setUser, currentUser, setIsEditMode }: InputProps) => {
    //const [input, setInput] = useState<string>("");
    //const [age, setAge] = useState<string>("");
    //const [user, setUser] = useState<User[]>([]);
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");


    // useEffect(() => {
    //     setUser([...getAllUsers()]);
    // }, []);

    //if we are editing current user, then fill the input with values   
    useEffect(() => {
        if (currentUser) {
            setName(currentUser.name);
            setAge(currentUser.age.toString());
        }
    }, [currentUser]);
    // Function to handle submit (calls parent function)
    const handleSubmit = async () => {
        const ageNumber = parseInt(age, 10);//10 means its decimal
        //Math.random().toString(), 
        //await addUser(name, ageNumber);
        if (currentUser) {
            // Update existing user
            await updateUser(currentUser.id, name, ageNumber);
            //setIsEditMode(false);

        } else {
            // Add new user
            await addUser(name, ageNumber);
            //setIsEditMode(false);
        }
        const updatedUsers = await getAllUsers();
        setUser(updatedUsers);
        setName(""); // Clear input field after submission
        setAge("");


        setIsEditMode(false); // Exit edit mode
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
            {/* <Button title="Submit" onPress={handleSubmit} /> */}
            <Button
                title={currentUser ? "Update" : "Add"}
                onPress={handleSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
        width: 300,
    },
});

export default NameInput;
