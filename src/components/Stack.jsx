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
        name: "Push",
        type: "primary",
      },
      {
        name: "Pop",
        type: "primary",
      },
      {
        name: "Reset",
        type: "danger",
      },
    ],
    max_stack_size: null,
  };

  setMaxStackSize = () => {
    const max_stack_size = Math.floor((window.innerHeight * 0.9 * 0.75) / 76);

    this.setState({ max_stack_size });
  };

  componentDidMount() {
    this.setMaxStackSize();
  }

  handleWindowResize = () => {
    this.setMaxStackSize();
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

    toastMessage(`Pushed ${number} to stack`);
  };

  handlePop = () => {
    if (this.state.stack.length === 0) {
      toastMessage("Stack is empty", "error");
      return;
    }

    const new_stack = [...this.state.stack];

    const popped = new_stack.shift();
    this.setState({ stack: new_stack });

    toastMessage(`Poped ${popped} from stack`);
  };

  handleReset = () => {
    this.setState({ stack: [] });

    toastMessage("Stack has been reset");
  };

  render() {
    const stack_buttons = [...this.state.stack_buttons];

    stack_buttons[0]["handler"] = this.handlePush;
    stack_buttons[1]["handler"] = this.handlePop;
    stack_buttons[2]["handler"] = this.handleReset;

    window.onresize = this.handleWindowResize;
    return (
      <div className="data-structure">
        <StackContainer stack={this.state.stack} />
        <ADTOperation data_type="Stack" buttons={this.state.stack_buttons} />
      </div>
    );
  }
}

export default Stack;
