import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import Hoodie from '@hoodie/client'

import AddLoop from './AddLoop'
import NavBar from './NavBar'


const hoodie = new Hoodie()

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loops: []
    };
    this.loadLoops();
  }

  componentDidMount() {
    hoodie.store.on('change', this.loadLoops);
    hoodie.account.on('signin', this.loadLoops)
    hoodie.account.on('signout', this.loadLoops)
  }

  loadLoops = () => {
    hoodie.store.findAll(doc => doc.type == 'loop')
      .then(loops => this.setState({loops}))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar account={hoodie.account} />

          {this.state.loops.map(loop => (
            <Paper key={loop.id} zDepth={2} style={{maxWidth: 400, margin: '20px auto'}}>
              <h3 style={{padding: 15}}>{loop.title}</h3>
            </Paper>
          ))}

          <Paper zDepth={2} style={{maxWidth: 400, padding: 15, margin: '20px auto'}}>
            <AddLoop store={hoodie.store} />
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}
