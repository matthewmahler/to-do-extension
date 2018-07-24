import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class TodoList extends Component {
  render() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              <List>
                {this.props.data.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <ListItem key={item.id}>
                          <Icon {...provided.dragHandleProps}>drag_handle</Icon>
                          <ListItemText primary={item.name} />
                          <ListItemSecondaryAction>
                            <IconButton
                              aria-label="Delete"
                              onClick={() => {
                                this.props.handleClick(item.id);
                              }}
                            >
                              <Icon>delete</Icon>
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
export default TodoList;
