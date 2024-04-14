import React, { Component } from 'react'
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
export default class Todo extends Component {
  render() {
    return (
      <div>
            <div className='todo' style={{ display: 'flex' }}>
                <li className="todo-item">Title</li>

                <button className="check-btn">
                <TiTick />
                </button>

                <button className="trash-btn">
                <MdDelete />
                </button>
            </div>
      </div>
    )
  }
}
