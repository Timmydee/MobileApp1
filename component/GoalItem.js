import { View, Text, StyleSheet, Pressable, Modal, Button } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native";
import { useState } from "react";

function GoalItem(props){
    const [textChange, setTextChange] = useState(props.text)
    const [modalShow, setModalShow] = useState(false)

    function handleModal(){
        setModalShow(true)
    }

    function cancelUpdate(){
        setModalShow(false)
    }
    
    return(
        <View style={styles.itemContainer}>
            <View style={styles.textInfo}>
                {/* <Pressable 
                    style={({pressed}) => pressed && styles.pressedItem}
                    >
                    <Text style={styles.text}>{props.text}</Text>
                </Pressable> */}
                <TextInput 
                    style={styles.text}
                    defaultValue={textChange}
                />
            </View>

            <View style={styles.iconcol}>
                <AntDesign name="delete" size={24} color="black" onPress={props.delete.bind(this, props.id)}/>
                <AntDesign name="edit" size={24} color="black" onPress={handleModal} />
            </View>

            <Modal visible={modalShow} style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={styles.textM}>Edit Goal</Text>
               
                    <TextInput
                        style={styles.input}
                        defaultValue={textChange}
                        onChangeText={newText => setTextChange(newText)}
                    />
                    <View style={styles.button}>
                        <View style={styles.button2}>
                            <Button title='Update Goal' onPress={props.edit.bind(this, props.id, textChange)}/>  
                        </View>
                        <View style={styles.button2}>
                            <Button title='Cancel' onPress={cancelUpdate} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection: 'row'
    },
    textInfo: {
        backgroundColor: '#5e0acc',
        margin: 8,  
    },
    pressedItem: {
        opacity: 0.5,
    },
    text:{
        color: 'white',
        padding: 8,
    },
    textM:{
        color: 'black',
        fontSize: 30
    },
    modal:{
        backgroundColor: "orange",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10
    },
    modalContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        width:'50%'
    },
    iconcol:{
        flexDirection:'row',
        alignItems: 'center'
    }
})