import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadSuits, addSuit, toggleSuit, deleteSuit } from '../actions/actionCreators'

class SuitsContainer extends Component {

  getSuits() {
    axios.get('/api/v1/suits')
    .then(response => {
      this.props.dispatch(loadSuits(response.data));
    })
    .catch(error => console.log(error))
  }

  createSuit = (e) => {
    if (e.key === 'Enter' && !(this.getTitle.value === '')) {
      axios.post('/api/v1/suits', {suit: {title: this.getTitle.value}})
      .then(response => {
        this.props.dispatch(addSuit(response.data.id, response.data.title))
        this.getTitle.value = '';
      })
      .catch(error => console.log(error))
    }
  }

  updateSuit = (e, id) => {
    axios.put(`/api/v1/suits/${id}`, {suit: {avail: e.target.checked}})
    .then(response => {
      this.props.dispatch(toggleSuit(id))
    })
    .catch(error => console.log(error))
  }

  deleteSuit = (id) => {
    axios.delete(`/api/v1/suits/${id}`)
    .then(response => {
      this.props.dispatch(deleteSuit(id))
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getSuits();
	}

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="taskInput" type="text" placeholder="Add a task" maxLength="50"
            onKeyPress={this.createSuit} ref={(input)=>this.getTitle = input} />
        </div>
        <div className="listWrapper">
          <ul className="taskList">
            {this.props.suits.map((suit) => {
              return(
                <li className="task" key={suit.id} id={suit.id}>
                  <input className="taskCheckbox" type="checkbox"
                    checked={suit.avail} onChange={(e) => this.updateSuit(e, suit.id)} />
                  <label className="taskLabel">{suit.title}</label>
                  <span className="deleteTaskBtn" onClick={(e) => this.deleteSuit(suit.id)}>
                    x
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    suits: state.suits
  }
}

export default connect(mapStateToProps)(SuitsContainer)
