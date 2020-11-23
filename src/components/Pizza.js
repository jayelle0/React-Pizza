import React from "react"

class Pizza extends React.Component  {
  vegetarian = () => {
    if (this.props.pizza.vegetarian === true) {
      // console.log(this.props.pizza.vegetarian)
      return "Yes"
    } else {
      return "No"
    }
  } 


  editHandler = (event) => {
    // console.log(this.props)
    return this.props.renderForm(this.props)
  }
  render() {

      let {pizza} = this.props
      // console.log(this.props.pizza)

    return(
      <tr>
        <td>{pizza.topping}</td>
        <td>{pizza.size}</td>
        <td> {this.vegetarian()}</td>
        <td><button type="button" onClick={this.editHandler} className="btn btn-primary">Edit Pizza</button></td>
      </tr>
    )
  }
}

export default Pizza
