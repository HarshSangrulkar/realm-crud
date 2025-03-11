import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { addToDo, getToDos, updateToDo, deleteToDo } from "./database";
import { ToDo } from "./realmConfig";

const ListDisplay = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    // Load ToDo list when app starts
    useEffect(() => {
        setTodos([...getToDos()]);
    }, []);

    // Function to add a new ToDo
    const handleAdd = () => {
        if (newTask.trim() === "") return;
        addToDo(newTask);
        setTodos([...getToDos()]); // Refresh list
        setNewTask(""); // Clear input
    };

    // Function to toggle completion
    const handleToggle = (id: number) => {
        updateToDo(id);
        setTodos([...getToDos()]);
    };

    // Function to delete a ToDo
    const handleDelete = (id: number) => {
        deleteToDo(id);
        setTodos([...getToDos()]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Realm To-Do App</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter a task"
                value={newTask}
                onChangeText={setNewTask}
            />
            <Button title="Add Task" onPress={handleAdd} />

            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text style={[styles.todoText, item.isCompleted && styles.completed]}>
                            {item.title}
                        </Text>
                        <Button title="✔" onPress={() => handleToggle(item.id)} />
                        <Button title="❌" onPress={() => handleDelete(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
    input: { borderWidth: 1, padding: 10, marginBottom: 10 },
    todoItem: { flexDirection: "row", justifyContent: "space-between", padding: 10, borderBottomWidth: 1 },
    todoText: { fontSize: 18 },
    completed: { textDecorationLine: "line-through", color: "gray" },
});

export default ListDisplay;
