import { realm, Student } from "../db/realmSchema";
import { ObjectId } from "bson";

// Fetch all students
export const getStudents = (): Student[] => {
    return [...realm.objects<Student>("Student").sorted("_id", true)];
};


// Add a new student
export const addStudent = (name: string, age: number, email: string, phone: string) => {
    realm.write(() => {
        realm.create("Student", {
            _id: new ObjectId(),
            name,
            age,
            email,
            phone,
        });
    });
};

// Update an existing student
export const updateStudent = (id: ObjectId, name: string, age: number, email: string, phone: string) => {
    realm.write(() => {
        let student = realm.objectForPrimaryKey<Student>("Student", id);
        if (student) {
            student.name = name;
            student.age = age;
            student.email = email;
            student.phone = phone;
        }
    });
};

// Delete a student
export const deleteStudent = (id: ObjectId) => {
    realm.write(() => {
        let student = realm.objectForPrimaryKey<Student>("Student", id);
        if (student) {
            realm.delete(student);
        }
    });

};
