import React, { useEffect } from 'react'
import {Container } from 'react-bootstrap'
import Tab from './Components/Tab'
import {connect} from 'react-redux'
import getUsers from './request'

const mapStateToProps = function(state){
  return state;
}

const mapDispatchToProps = function(dispatch){
  return{
    recived: function(users){ return dispatch({type: "RECIVED" , users})}
  }
}


const Users = (props) => {
  useEffect(() => {
    getUsers().then(data => {
      props.recived(data)
    })
  }, [])

  return (
    <Container>
      <Tab users={props.users} />
    </Container>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
