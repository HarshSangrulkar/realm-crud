import { realm, ToDo } from "./realmConfig";


// Function to add a ToDo
export const addToDo = (newTitle: string): void => {
  //takes param newTitle(string) and returns void
  realm.write(() => {
    const lastToDo = realm.objects<ToDo>("ToDo").sorted("id", true)[0];
    const newId = lastToDo ? lastToDo.id + 1 : 1;
    //the new item to be stored has the id incremented from the previos entry.

    realm.create("ToDo", { id: newId, title: newTitle, isCompleted: false });
  });
};

// Function to update (toggle completion)
export const updateToDo = (id: number): void => {
  //takes id as param and returns void
  realm.write(() => {
    //Finds task by ID using objectForPrimaryKey("ToDo", id)
    const task = realm.objectForPrimaryKey<ToDo>("ToDo", id);

    //if task exists then toggle completion status to completed
    if (task) task.isCompleted = !task.isCompleted;
  });
};

// Function to delete a ToDo
export const deleteToDo = (id: number): void => {
  realm.write(() => {
    const task = realm.objectForPrimaryKey<ToDo>("ToDo", id);
    if (task) realm.delete(task);
  });
};

// Function to get all ToDos
export const getToDos = (): ToDo[] => {
  //ToDo[] → This means the function returns an array of ToDo objects.
  //The <ToDo> ensures TypeScript understands the objects are of type ToDo.
  //Returns the sorted list of all ToDo objects.
  return [...realm.objects<ToDo>("ToDo").sorted("id")];
};
/*
This function fetches all objects from the Realm database that belong to the "ToDo" schema and returns them as a sorted array.
*/