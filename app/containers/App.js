import React, { Component } from 'react';
import Button from '../components/Button';

class App extends Component {
  render () {
    return (
      <div className='mod-example'>
        <Button
          type='button'
          link='#'
        >
          Praesent quis rhoncus
        </Button>

        <Button
          type='button'
          link='#'
          disabled={ true }
        >
           Praesent quis rhoncus
        </Button>
      </div>
    )
  }
}

export default App;
