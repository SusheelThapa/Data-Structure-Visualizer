import React, { Component } from "react";
import StackContainer from "./StackContainer";
import ADTOperation from "./common/ADTOperation";

import { toastMessage } from "../services/toastMessage";
import { generateRandomNumber } from "../services/generateRandomNumber";

class Stack extends Component {
  state = {
    stack: [],
    stack_buttons: [
      {
        id: "push",
        name: "Push",
        type: "primary",
      },
      {
        id: "pop",
        name: "Pop",
        type: "primary",
      },
      {
        id: "top",
        name: "Top",
        type: "info",
      },
      {
        id: "isfull",
        name: "isFull",
        type: "info",
      },
      {
        id: "isempty",
        name: "isEmpty",
        type: "info",
      },
      {
        id: "reset",
        name: "Reset",
        type: "danger",
      },
    ],
    max_stack_size: null,
  };

  componentDidMount() {
    this.setMaxStackSize();

    const stack_buttons = [...this.state.stack_buttons];

    /*Binding the button and their handler*/
    for (let button of stack_buttons) {
      button["handler"] = this.getButtonHandler(button.id);
    }

    this.setState({ stack_buttons });
  }

  setMaxStackSize = () => {
    /*Setting the new max_stack_size*/

    const total_stack_container_height = window.innerHeight * 0.9;
    const stack_element_size = total_stack_container_height * 0.09 + 20;
    const max_stack_size = Math.floor(
      total_stack_container_height / stack_element_size
    );

    this.setState({ max_stack_size });

    const extra_element_count = this.state.stack.length - max_stack_size;

    if (extra_element_count > 0) {
      this.handlePop();
    }
  };

  handleWindowResize = () => {
    this.setMaxStackSize();
  };

  getButtonHandler = (id) => {
    if (id === "push") {
      return this.handlePush;
    } else if (id === "pop") {
      return this.handlePop;
    } else if (id === "reset") {
      return this.handleReset;
    } else if (id === "top") {
      return this.handleTop;
    } else if (id === "isfull") {
      return this.handleIsFull;
    } else if (id === "isempty") {
      return this.handleIsEmpty;
    }
  };

  handlePush = () => {
    const { stack, max_stack_size } = this.state;

    if (stack.length === max_stack_size) {
      toastMessage("Stack is full", "error");
      return;
    }

    let number = 0;
    do {
      number = generateRandomNumber();
    } while (stack.indexOf(number) !== -1);

    const new_stack = [...this.state.stack];
    new_stack.unshift(number);
    this.setState({ stack: new_stack });

    toastMessage(`Pushed ${number} to stack`, "success");
  };

  handlePop = () => {
    if (this.state.stack.length === 0) {
      toastMessage("Stack is empty", "error");
      return;
    }

    const new_stack = [...this.state.stack];

    const popped = new_stack.shift();
    this.setState({ stack: new_stack });

    toastMessage(`Poped ${popped} from stack`, "success");
  };

  handleIsFull = () => {
    const { stack, max_stack_size } = this.state;

    stack.length === max_stack_size
      ? toastMessage("Stack is Full", "info")
      : toastMessage("Stack isn't Full", "info");
  };

  handleIsEmpty = () => {
    const { stack } = this.state;

    stack.length === 0
      ? toastMessage("Stack is empty", "info")
      : toastMessage("Stack isn't empty", "info");
  };

  handleTop = () => {
    toastMessage(`The top of the index is ${this.state.stack[0]}`, "info");
  };

  handleReset = () => {
    this.setState({ stack: [] });

    toastMessage("Stack has been reset", "success");
  };

  render() {
    window.onresize = this.handleWindowResize;

    const { stack, stack_buttons } = this.state;

    return (
      <div className="container text-center data-structure">
        <div className="row">
          <div className="col">
            <ADTOperation data_type={"Stack"} buttons={stack_buttons} />
          </div>
          <div className="col-9   flex-c-c">
            <StackContainer stack={stack} />
          </div>
        </div>
      </div>
    );
  }
}

export default Stack;
