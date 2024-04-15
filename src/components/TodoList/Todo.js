import React, { Component } from 'react'
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
export default class Todo extends Component {

  removeHandler(id){
    this.props.onRemove(id)
      }

      editHandler(id){
        this.props.onEdit(id)
      }
  render() {
    return (
      <div>
            <div className={`todo ${this.props.comleted ? "completed" : ""}`} style={{ display: 'flex' }}>
                <li className="todo-item">{this.props.title}</li>

                <button className="check-btn" onClick={this.editHandler.bind(this,this.props.id)}>
                <TiTick />
                </button>

                <button className="trash-btn" onClick={this.removeHandler.bind(this,this.props.id)}>
                <MdDelete />
                </button>
            </div>
      </div>
    )
  }
}
