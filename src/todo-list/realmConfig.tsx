import Realm from "realm";

// Define the ToDo Schema
class ToDo extends Realm.Object<ToDo> {
    id!: number;
    title!: string;
    isCompleted!: boolean;
    //! -> means the field is required or this will always have a value

    //static -> means schema belongs to the class itself, not an instance of the class.
    //Realm.ObjectSchema -> tells Realm that schema must follow the structure of a Realm schema object.
    static schema: Realm.ObjectSchema = {
        name: "ToDo",
        primaryKey: "id",
        properties: {
            id: "int",
            title: "string",
            isCompleted: "bool",
        },
    };
}
/*
name: "ToDo" → Name of the database table (or collection).
primaryKey: "id" → Defines id as a unique identifier.
properties → Defines the fields in the database:
id: "int" → id is an integer.
title: "string" → title is a text field.
isCompleted: "bool" → isCompleted is a true/false value.
*/

// Open Realm Database
const realm = new Realm({ schema: [ToDo] });
//it ensures that all stored ToDo objects match this schema.
//This creates or opens the database.
//If the database doesn’t exist, Realm creates it.


export { realm, ToDo };
