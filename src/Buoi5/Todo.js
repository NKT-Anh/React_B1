import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { loadTodoRealtime, addTodo, deleteTodo } from './FirebaseApi';
import { useNavigation } from '@react-navigation/native';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [hienModal, setHienModal] = useState(false);
    const [tieuDeMoi, setTieuDeMoi] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = loadTodoRealtime((updatedTodos) => {
            setTodos(updatedTodos); 
        });
        return () => unsubscribe();
    }, []);

    const themTodo = async () => {
        if (!tieuDeMoi.trim()) {
            Alert.alert('Lỗi', 'Tiêu đề không được để trống!');
            return;
        }
        try {
            const todoMoi = { title: tieuDeMoi, completed: false };
            await addTodo(todoMoi);
            setTieuDeMoi('');
            setHienModal(false);
        } catch (error) {
            console.error('Lỗi khi thêm todo:', error);
        }
    };

    const xoaTodo = async (id) => {
        try {
            await deleteTodo(id);
        } catch (error) {
            console.error('Lỗi khi xóa todo:', error);
        }
    };

    const xacNhanXoa = (id) => {
        Alert.alert(
            'Xóa Todo',
            'Bạn có chắc chắn muốn xóa todo này không?',
            [
                { text: 'Hủy', style: 'cancel' },
                { text: 'Xóa', style: 'destructive', onPress: () => xoaTodo(id) },
            ],
            { cancelable: true }
        );
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.todoItem}
            onPress={() => navigation.navigate('TodoDetail', { todo: item })}
            onLongPress={() => xacNhanXoa(item.id)}
        >
            <Text style={styles.todoTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Button title="Thêm Todo" onPress={() => setHienModal(true)} />
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={hienModal}
                onRequestClose={() => setHienModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Thêm Todo Mới</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập tiêu đề todo"
                            value={tieuDeMoi}
                            onChangeText={setTieuDeMoi}
                        />
                        <View style={styles.modalButtons}>
                            <Button title="Hủy" onPress={() => setHienModal(false)} />
                            <Button title="Thêm" onPress={themTodo} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    list: {
        marginTop: 16,
    },
    todoItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    todoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Todo;