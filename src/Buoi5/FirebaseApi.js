import { collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const loadTodoRealtime = (callback) => {
    try {
        const todoCollection = collection(db, 'todos');
        const unsubscribe = onSnapshot(todoCollection, (snapshot) => {
            const todos = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            callback(todos);
        });
        return unsubscribe;
    } catch (error) {
        console.error('Error loading todos realtime:', error);
        throw error;
    }
};

// Add a new todo
export const addTodo = async (todo) => {
    try {
        const todoCollection = collection(db, 'todos');
        const docRef = await addDoc(todoCollection, todo);
        return { id: docRef.id, ...todo };
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error;
    }
};

export const deleteTodo = async (id) => {
    try {
        const todoDoc = doc(db, 'todos', id);
        await deleteDoc(todoDoc);
        return id;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};

export const updateTodo = async (id, updatedTodo) => {
    try {
        const todoDoc = doc(db, 'todos', id);
        await updateDoc(todoDoc, updatedTodo);
        return { id, ...updatedTodo };
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};