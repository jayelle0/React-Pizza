import React from "react"

class PizzaForm extends React.Component{
  state = {
    topping: "", 
    size: "",
    vegetarian: "" 
    // notVegetarian: ""
  }

  componentDidUpdate=(prevProps) => {
    if (this.props.editPizza !== prevProps.editPizza){
      this.setState({
        topping: this.props.editPizza.pizza.topping, 
        size: this.props.editPizza.pizza.size,
        vegetarian: this.props.editPizza.pizza.vegetarian,
        // notVegetarian: !this.props.editPizza.pizza.vegetarian
      })
    }
  }

  changeHandler = event => {
    this.setState({[event.target.name]:event.target.value
    })
  }
  

  clickHandler = event => {
      this.setState({[event.target.name]: !this.state.vegetarian})
      // console.log(this.state.vegetarian)
  }

  submitHandler = event => {
    event.preventDefault() 
    // console.log(this.state)
    this.props.formHandler(this.props.editPizza.pizza.id, this.state)
  }
  render() {
    // console.log(this.props.editPizza)
    console.log(this.state)
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping} name= "topping" onChange={this.changeHandler}/>
          </div>
          <div className="col">
            <select value={this.state.size} className="form-control" name="size" onChange={this.changeHandler}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check" >
              <input className="form-check-input" type="radio"  checked={this.state.vegetarian} value="Vegetarian" name="vegetarian" onChange={this.clickHandler}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check" >
              <input className="form-check-input" type="radio" checked={!this.state.vegetarian} name="vegetarian" value="Not Vegetarian" onChange={this.clickHandler} />
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.submitHandler}>Submit</button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
