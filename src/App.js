import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    editPizza: {}
  }

  componentDidMount = () =>  {
    fetch('  http://localhost:3000/pizzas')
    .then(response => response.json())
    .then(pizzaArray => {
      this.setState({pizzas: pizzaArray})
      // console.log(pizzaArray)
    });
  }

  formHandler = (id, updatedPizza) => {
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPizza),
    })
    .then(response => response.json())
    .then(updatedPizza => {
      console.log('Success:', updatedPizza)
      let newPizzaArray = [...this.state.pizzas]
      let index = newPizzaArray.findIndex(pizza=> pizza.id===id)
      newPizzaArray[index] = updatedPizza
      this.setState({pizzas: newPizzaArray})
    })
  }

  renderForm = (pizzaObj) => {
    this.setState({editPizza: pizzaObj})
  }

  render() {
    // console.log(this.state.editPizza)
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.state.editPizza} formHandler={this.formHandler}/>
        <PizzaList pizzas={this.state.pizzas} renderForm={this.renderForm}/>
      </Fragment>
    );
  }
}

export default App;
