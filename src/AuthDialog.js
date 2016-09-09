import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export default class AuthDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleConfirm = () => {
    const account = this.props.account;
    const username = this.state.username.trim();
    const password = this.state.password.trim();

    if (!username || !password) {
      return;
    }

    if (this.props.action == 'signup') {
      account.signUp({username, password})
        .then(() => {
          return account.signIn({username, password})
        })
        .catch(console.error)
    } else {
      account.signIn({username, password})
        .catch(console.error)
    }
    this.props.handleClose();
    this.clearState();
  }

  handleCancel = () => {
    this.props.handleClose();
    this.clearState();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleConfirm();
  }
  
  clearState = () => {
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    const buttons = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCancel}
      />,
      <FlatButton
        label="Submit"
        type="submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleConfirm}
      />
    ];

    return (
      <div>
        <Dialog
          title={this.props.action == 'signup' ? 'Sign Up' : 'Sign In'}
          actions={buttons}
          modal={false}
          open={this.props.action !== null}
          onRequestClose={this.handleCancel}
          contentStyle={{maxWidth: 400}}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              name="username"
              floatingLabelText="Username"
              onChange={(e) => this.setState({username: e.target.value})}
            />
            <TextField
              name="password"
              floatingLabelText="Password"
              onChange={(e) => this.setState({password: e.target.value})}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}
