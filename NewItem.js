import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'

class NewItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    console.log(props)
  }
  render() {
    console.log(this.state.text)
    return (
      <View>
        <TextInput
          placeholder="add new item..."
          style={{ borderColor: 'grey', borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
        />
        <Button
          onPress={() => this.props.addItem(this.state.text)}
          title="Add New Item"
        />
      </View>
    )
  }
}

export default NewItem
