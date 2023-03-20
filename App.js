import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView , FlatList} from 'react-native';
import GoalInputs from './component/GoalInputs';
import GoalItem from './component/GoalItem';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [getGoals, setGetGoals] = useState([])

  function getSubmit(enteredText){
    setGetGoals((currentGoals => [
      ...currentGoals, 
      {text: enteredText, id: Math.random().toString()}]))
    cancelGoalHandler()
  }

  function addGoalHandler(){
    setModalVisible(true)
  }

  function cancelGoalHandler(){
    setModalVisible(false)
  }

  function onDelete(id){ 
    setGetGoals((currentGoals) => {
      return currentGoals.filter((item) => item.id !== id)
    })
  }

  function onEdit(id, textChange){
    let newObject = {
      id: id,
      text: textChange
    }
    let newArr = getGoals
    let p = newArr.filter(item => item.id !== id)
    let newestArr = [...p, newObject]
    console.log(newestArr)
    setGetGoals(newestArr)
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add a Goal'
        onPress={addGoalHandler}
      />
      <GoalInputs getSubmit={getSubmit} modal={modalVisible} cancel={cancelGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={getGoals} 
          renderItem={(itemData) => {
            return(
              <GoalItem text={itemData.item.text} add={addGoalHandler} delete={onDelete} id={itemData.item.id} edit={onEdit} />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}  
     />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    marginTop: 15,
    flex: 5
  }

});
