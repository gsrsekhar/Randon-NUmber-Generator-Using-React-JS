/* eslint-disable react/no-unused-state */
// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {isNumber: 0}

  onRandomClick = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({isNumber: randomNumber})
  }

  render() {
    const {isNumber} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onRandomClick}>
            Generate
          </button>
          <p className="paragraph">{isNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
