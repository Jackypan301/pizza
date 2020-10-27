import React from 'react'
import ReactDOM from 'react-dom'
import List from './components/List.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      toppings: ['pineapple', 'sausage', 'pepperoni']
    }
  }

  componentDidMount () {
    axios.get('/pizzas')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`something wrong here`);
      })
  }


  render() {
    return (
      <div>
        <h1> Top 20 Combo Toppings for pizza </h1>
        {/* <List toppings={this.state.toppings} /> */}
      </div>
    )
  }
}
ReactDOM.render(< App />, document.getElementById('app'))
