import Realm from "realm";
import { openRealm, User } from "./realmConfig";
import { ObjectId } from "bson";

//add
export const addUser = async (name: string, age: number) => {
    const realm = await openRealm();

    realm.write(() => {
        const lastStudent = realm.objects<User>("User").sorted("id", true)[0];

        const newId = lastStudent ? lastStudent.id + 1 : 1;
        realm.create("User", { id: newId, name, age });
    });

    realm.close();
};
//fetch
export const getAllUsers = async (): Promise<User[]> => {
    const realm = await openRealm();
    return [...realm.objects<User>("User").sorted("id", false)];
    // return realmConfig.objects<User>("User").map((user) => ({
    //     id: user._id.toHexString(),
    //     name: user.name,
    //     age: user.age,
    // }));
    realm.close();
};
//delete
export const deleteUser = async (id: number): Promise<void> => {
    const realm = await openRealm();

    realm.write(() => {
        //const objectId = new Realm.BSON.ObjectId(id);
        const user = realm.objectForPrimaryKey<User>("User", id);
        if (user) {
            realm.delete(user);
        }
    });
    realm.close();
};
//update
export const updateUser = async (id: number, newName: string, newAge: number): Promise<void> => {
    const realm = await openRealm();

    realm.write(() => {
        const user = realm.objectForPrimaryKey<User>("User", id);
        if (user) {
            user.name = newName;
            user.age = newAge;
        }
    });
    realm.close();
};

