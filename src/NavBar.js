import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import KeyIcon from 'material-ui/svg-icons/communication/vpn-key'
import AccountIcon from 'material-ui/svg-icons/action/account-circle'

import AuthDialog from './AuthDialog'


export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: this.props.account.isSignedIn(),
      openedDialog: null
    }
  }

  signOutCallback = () => this.setState({isSignedIn: false})
  signInCallback = () => this.setState({isSignedIn: true})

  componentDidMount() {
    this.props.account.on('signout', this.signOutCallback)
    this.props.account.on('signin', this.signInCallback)
  }

  componentWillUnmount() {
    this.props.account.on('signout', this.signOutCallback)
    this.props.account.on('signin', this.signInCallback)
  }

  render () {
    let authMenu;

    if (this.state.isSignedIn) {
      authMenu = (
        <IconMenu
          iconButtonElement={<IconButton><AccountIcon /></IconButton>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Sign Out" onTouchTap={() => this.props.account.signOut()} />
        </IconMenu>
      )
    } else {
      authMenu = (
        <IconMenu
          iconButtonElement={<IconButton><KeyIcon /></IconButton>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Sign Up" onTouchTap={() => this.setState({openedDialog: 'signup'})} />
          <MenuItem primaryText="Sign In" onTouchTap={() => this.setState({openedDialog: 'signin'})} />
        </IconMenu>
      )
    }

    return (
      <div>
        <AppBar
          title="Action Loop"
          showMenuIconButton={false}
          iconElementRight={authMenu}
        />
        <AuthDialog
          account={this.props.account}
          action={this.state.openedDialog}
          handleClose={() => this.setState({openedDialog: null})}
        />
      </div>
    )
  }
}
