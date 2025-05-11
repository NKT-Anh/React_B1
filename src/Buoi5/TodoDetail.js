import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { updateTodo } from './FirebaseApi'; 
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const TodoDetail = ({ route, navigation }) => {
    const { todo } = route.params;
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [completed, setCompleted] = useState(todo.completed);

    const handleSave = async () => {
        try {
            await updateTodo(todo.id, { title, completed });
            setIsEditing(false);
            navigation.goBack();
        } catch (error) {
            console.error('Lỗi khi cập nhật todo:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Chi Tiết Todo</Text>
                <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                    <Icon name="edit" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            {isEditing ? (
                <>
                    <Text style={styles.label}>Tiêu đề:</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Text style={styles.label}>Hoàn thành:</Text>
                    <View style={styles.checkboxContainer}>
                        <Text>{completed ? 'Yes' : 'No'}</Text>
                        <Button
                            title={completed ? 'Bỏ hoàn thành' : 'Hoàn thành'}
                            onPress={() => setCompleted(!completed)}
                        />
                    </View>
                    <Button title="Lưu" onPress={handleSave} />
                </>
            ) : (
                <>
                    <Text style={styles.label}>Tiêu đề:</Text>
                    <Text style={styles.value}>{title}</Text>
                    <Text style={styles.label}>Hoàn thành:</Text>
                    <Text style={styles.value}>{completed ? 'Yes' : 'No'}</Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    value: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        marginBottom: 20,
    },
});

export default TodoDetail;