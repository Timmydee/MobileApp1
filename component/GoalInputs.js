import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"
import { useState } from 'react';

function GoalInputs (props) {
    const [enteredText, setEnteredText] = useState('')

    function getText(enter){
        setEnteredText(enter)
    }

    function handleSubmit(){
        props.getSubmit(enteredText)
        setEnteredText('')
    }

    return (
        <Modal visible={props.modal}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/splash.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your current Goal' 
                    onChangeText={getText}
                    value={enteredText}
                />
                <View style={styles.button}>
                    <View style={styles.button2}>
                        <Button title='Add Goal' onPress={handleSubmit} />  
                    </View>
                    <View style={styles.button2}>
                        <Button title='Cancel' onPress={props.cancel} />
                    </View>
                </View>
                    
            </View>
        </Modal>
    )
}

export default GoalInputs

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 4,
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      backgroundColor: '#311b6b'
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: '70%',
      marginRight: 8,
      padding: 8,
      color: '#ffffff'
    },
    button:{
        flexDirection: "row",
        marginTop: 10,
    },
    button2:{
        width: 100,
        marginHorizontal: 8,
    },
    image:{
        width: 100,
        height: 100,
    }
})