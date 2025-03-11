import Realm from "realm";

// Define the Student schema
class Student extends Realm.Object<Student> {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    age!: number;
    email!: string;
    phone!: string;

    static schema = {
        name: "Student",
        primaryKey: "_id",
        properties: {
            _id: "objectId",
            name: "string",
            age: "int",
            email: "string",
            phone: "string",
        },
    };
}

// Open the Realm database
const realm = new Realm({ schema: [Student] });

export { Student, realm };
