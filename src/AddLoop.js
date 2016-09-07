import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export default class AddLoop extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        title: ''
      }
  }

  handleTitleChange = (e) => this.setState({title: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.add({
      type: 'loop',
      title: this.state.title
    })
    this.setState({title: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          hintText="New loop"
          value={this.state.title}
          onChange={this.handleTitleChange}
          style={{marginRight: '10px'}}
        />
        <RaisedButton label="Add" type="submit" primary={true} />
      </form>
    );
  }
}
