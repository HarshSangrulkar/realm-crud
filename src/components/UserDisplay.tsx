import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
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

    const handleUpdate = async (id: number, name: string, age: number) => {
        await updateUser(id, name, age);
        //setUser([...getAllUsers()]);
        await refreshUsers();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>User List</Text>
            <NameInput setUser={setUsers} />
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <Text style={styles.text}>
                            Name: {item.name} Age:{item.age}


                        </Text>
                        <Button title="Edit" onPress={() => handleUpdate(item.id, "Harsh", 21)} />
                        <Button title="Delete" onPress={() => handleDelete(item.id)} />
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
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    noData: {
        fontSize: 16,
        color: "gray",
    },
    userItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
    },
});

export default UserDisplay;