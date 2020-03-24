import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadSuits, addSuit, modifySuit, deleteSuit } from '../actions/actionCreators'

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
      this.props.dispatch(modifySuit(id))
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

    const suitCardStyle = {
      borderLeftWidth: '2%',
      borderStyle: 'solid',
      borderWidth: '3px',
      borderColor: 'black',
      borderRadius: '10px',
      margin: '10px',
      padding: '4px',
      boxShadow: '4px 4px #AEAEAE',
      backgroundColor: '#FDFDFD',
    }
    const suitAddStyle = {
      borderLeftWidth: '2%',
      borderStyle: 'solid',
      borderWidth: '3px',
      borderColor: 'black',
      borderRadius: '10px',
      marginLeft: '2%',
      marginTop: '2%',
      marginRight: '2%',
      padding: '8px',
      boxShadow: '4px 4px #AEAEAE',
      backgroundColor: '#FDFDFD',
    }

    const deleteButton = {
      backgroundColor: 'red',
      marginLeft: '40%',
      marginRight:'40%',
      marginTop: '5px',
      borderRadius: '10px',
      padding: '2px'
    }

    const inButton = {
      backgroundColor: '#259EDA',
      marginLeft: '12%',
      marginTop: '5px',
      borderRadius: '10px',
      padding: '2px'
    }

    const outButton = {
      backgroundColor: '#DA6125',
      marginLeft: '12%',
      marginTop: '5px',
      borderRadius: '10px',
      padding: '2px'
    }

    const availableButton = {
      backgroundColor: '#2BD49D',
      marginLeft: '12%',
      marginTop: '5px',
      borderRadius: '10px',
      padding: '2px'
    }

    const reservedButton = {
      backgroundColor: '#2238dd',
      marginLeft: '12%',
      marginTop: '5px',
      borderRadius: '10px',
      padding: '2px'
    }

    const suitName = {
      marginLeft: "10%",
      fontSize: "24px",
      textAlign: 'center',
      padding: '2px'
    }


    return (

      <div>
      <div style={suitAddStyle} className="inputContainer">
      (Admin only) Input the Name and Size of the suit being added:
      <input className="taskInput" type="text" placeholder="Add a Suit" maxLength="50"
      onKeyPress={this.createSuit} ref={(input)=>this.getTitle = input} />
      </div>


      <div className="listWrapper">
      <ul className="taskList">
      {this.props.suits.map((suit) => {
        return(
          <li style={suitCardStyle} className="task" key={suit.id} id={suit.id}>
          <div class="row">
          <label style={suitName} className="taskLabel col-5">{suit.title}</label>
          <div class="col-3">
          <span style={inButton}>
          <input className="AvailStatus" type="radio" name={suit.id} value="In" onChange={(e) => this.updateSuit(e, suit.id)} />In
          </span>
          <span style={availableButton}>
          <input className="AvailStatus" type="radio" name={suit.id} value="Available" onChange={(e) => this.updateSuit(e, suit.id)} />Available
          </span>
          <span style={reservedButton}>
          <input className="AvailStatus" type="radio" name={suit.id} value="Reserved" onChange={(e) => this.updateSuit(e, suit.id)} />Reserved
          </span>
          <span style={outButton}>
          <input className="AvailStatus" type="radio" name={suit.id} value="Out" onChange={(e) => this.updateSuit(e, suit.id)} />Out
          </span>
          </div>

          <div style={deleteButton} className="deleteTaskBtn col-3" onClick={(e) => this.deleteSuit(suit.id)}>
          Click here to delete
          </div>
          </div>

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
