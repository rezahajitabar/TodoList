import React, { Component } from 'react'
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
export default class Todo extends Component {
  render() {
    return (
      <div>
            <div className={`todo ${this.props.comleted ? "comleted" : "line"}`} style={{ display: 'flex' }}>
                <li className="todo-item">{this.props.title}</li>

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
