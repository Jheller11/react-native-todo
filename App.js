import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NewItem from './NewItem'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [{ key: 'finish this app' }, { key: 'pack up the apartment' }]
    }
    this.addItem = this.addItem.bind(this)
  }
  addItem(text) {
    let todos = this.state.todos
    console.log(todos)
    todos.push({ key: text })

    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>To Do:</Text>
        <NewItem style={styles.container} addItem={this.addItem} />
        <View>
          <Text style={{ marginTop: '10%' }} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: '10%',
    marginLeft: '5%'
  }
})
