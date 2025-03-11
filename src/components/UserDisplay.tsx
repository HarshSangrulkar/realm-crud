import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from "react-native";
import { getAllUsers, deleteUser, updateUser } from "../realmDB/realmCRUD";
import { ObjectId } from "bson";
import { User } from "../realmDB/realmConfig";
import NameInput from "./NameInput";
// Define props interface
// interface UserDisplayProps {
//     userDisplay: { id: string; name: string; age: number }[]; // List of users passed from parent
// }


//{ userDisplay }: UserDisplayProps
const UserDisplay = () => {
    //const [users, setUsers] = useState<userDisplay[]>
    //const [users, setUsers] = useState<{ id: ObjectId(); name: string; age: number }[]>([]);

    const [users, setUsers] = useState<User[]>([]);

    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);


    // const fetchUsers = () => {
    //     setUsers(getAllUsers());

    // };

    useEffect(() => {
        refreshUsers();
    }, []);

    // Async function to fetch users
    const refreshUsers = async () => {
        const updatedUsers = await getAllUsers();
        setUsers(updatedUsers);
    };

    // useEffect(() => {
    //     const usersData = getAllUsers().map(user => ({
    //         id: user.id,
    //         name: user.name,
    //         age: user.age,
    //     }));
    //     setUsers(usersData);
    // }, []);

    const handleDelete = async (id: number) => {
        await deleteUser(id);
        //setUser([...getAllUsers()]);
        //fetchUsers();
        await refreshUsers();
    };

    // const handleUpdate = async (id: number, name: string, age: number) => {
    //     await updateUser(id, name, age);
    //     //setUser([...getAllUsers()]);
    //     await refreshUsers();
    // }

    const handleUpdate = async (user: User) => {
        await setCurrentUser(user);
        await setIsEditMode(true); // switch to edit mode
        setCurrentUser(null);
    };
    return (
        <View style={styles.container}>

            <NameInput setUser={setUsers} currentUser={currentUser}
                setIsEditMode={setIsEditMode} />
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <Text style={styles.text}>
                            Name: {item.name} Age:{item.age}


                        </Text>
                        {/* <Button title="Edit" onPress={() => handleUpdate(item)} />
                        <Button title="Delete" onPress={() => handleDelete(item.id)} color={"red"} /> */}
                        <TouchableOpacity onPress={() => handleUpdate(item)} style={styles.button}><Text style={styles.btnText}>EDIT</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.button}><Text style={styles.btnText}>DELETE</Text></TouchableOpacity>
                    </View>
                )}
            />
        </View>
        //     <View style={styles.container}>
        //   <FlatList
        //     data={users}
        //     keyExtractor={(item) => item.id}
        //     renderItem={({ item }) => (
        //       <View style={styles.userItem}>
        //         <Text>{item.name} ({item.age} years old)</Text>
        //         <Button title="Delete" onPress={() => handleDelete(item.id)} />
        //       </View>
        //     )}
        //   />
        //   
        // </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 20,
        width: "100%",
        alignItems: "center",
    },

    userItem: {
        padding: 5,
        margin: 5,
        backgroundColor: "lightgray",
        borderRadius: 5,
        width: 300,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    text: {
        fontSize: 18,
    },
    button: {
        padding: 3,
        margin: 3,
        color: "blue"
    },
    btnText: {
        color: "red",
    }
});

export default UserDisplay;