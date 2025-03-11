import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import NameInput from "./src/components/NameInput";
import UserDisplay from "./src/components/UserDisplay";

//import { realmConfig, User } from "./realmDB/realmConfig";
// interface UserItem {
//   id: string; name: string; age: number
// }
const App = () => {
  //const [name, setName] = useState<string>("");
  //const [age, setAge] = useState<number | null>(null);


  //New states defined, because new component to display user details
  //const [users, setUsers] = useState<{ id: string; name: string; age: number }[]>([]);
  //const [users, setUsers] = useState<UserItem[]>([]);


  // Function to handle submitted name (passed as a prop)
  // const handleSubmit = (newName: string, newAge: number) => {
  //   setName(newName);
  //   setAge(newAge);
  // };

  // Function to handle user submission
  /*
  const handleSubmit = (newName: string, newAge: number) => {
    // Create a new user object
    const newUser = {
      id: Math.random().toString(), // Generate a unique ID
      name: newName,
      age: newAge,
    };

    // Update state with new user
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  */

  return (
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.text}>Hello, {name || "Guest"}! Age:{age}</Text>
    //   <NameInput onSubmit={handleSubmit} />
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Enter Your Details</Text>
      {/* <NameInput onSubmit={handleSubmit} />
      <UserDisplay userDisplay={users} />  */}
      {/* Pass users as props */}
      {/* <NameInput ></NameInput> */}
      <UserDisplay></UserDisplay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default App;
