import {useState} from 'react'

const Likes = (props) => {

  return (
    <div>
      <button onClick={props.handleClick} value ={props.values}>{props.sign}
      </button>
      </div>)
}

export default Likes
