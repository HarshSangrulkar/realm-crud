import Realm from "realm";

// Step 1: Define Schema
class User extends Realm.Object<User> {
    id!: number;
    name!: string;
    age!: number;

    static schema: Realm.ObjectSchema = {
        name: "User",
        primaryKey: "id",
        properties: {
            id: "int",
            name: "string",
            age: "int",
        },
    };
}

// Step 2: Open RealmDB
//const realmConfig = new Realm({ schema: [User] });
const openRealm = async () => {
    return await Realm.open({
        schema: [User],
    });
};

export { openRealm, User };
