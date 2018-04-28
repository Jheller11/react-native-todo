import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import NewItem from './NewItem'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [{ key: 'finish this app' }, { key: 'pack up the apartment' }]
    }
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  addItem(text) {
    if (text) {
      let todos = this.state.todos
      todos.push({ key: text })
      this.setState({
        todos: todos
      })
    }
  }

  deleteItem(key) {
    let todos = []
    this.state.todos.forEach(todo => {
      if (todo.key !== key) {
        todos.push(todo)
      }
    })
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>To Do:</Text>
        <NewItem addItem={this.addItem} />
        <View>
          <FlatList
            style={{ marginTop: '10%' }}
            data={this.state.todos}
            renderItem={({ item }) => (
              <View style={styles.flex}>
                <Text>{item.key}</Text>
                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => this.deleteItem(item.key)}
                >
                  <Text>Delete </Text>
                </TouchableOpacity>
              </View>
            )}
          />
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
    marginTop: 50,
    marginLeft: '5%'
  },
  delete: {
    alignItems: 'flex-end',
    backgroundColor: 'red'
  },
  flex: {
    marginTop: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    width: '90%'
  }
})
