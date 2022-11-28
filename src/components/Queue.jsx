import React, { Component } from "react";
import QueueContainer from "./QueueContainer";
import ADTOperation from "./common/ADTOperation";

import { generateRandomNumber } from "../services/generateRandomNumber";
import { toastMessage } from "../services/toastMessage";

class Queue extends Component {
  state = {
    queue: [],
    queue_buttons: [
      {
        name: "Enqueue",
        type: "primary",
      },
      {
        name: "Dequeue",
        type: "primary",
      },
      {
        name: "Reset",
        type: "danger",
      },
    ],
  };

  handleEnqueue = () => {
    const { queue } = this.state;

    if (queue.length === 9) {
      toastMessage("Queue is Full", "error");
      return;
    }

    const new_queue = [...queue];
    const number = generateRandomNumber();
    new_queue.push(number);
    this.setState({ queue: new_queue });
    toastMessage(`Enqueue ${number} person in queue`);
  };
  handleDequeue = () => {
    const { queue } = this.state;

    if (queue.length === 0) {
      toastMessage("Queue is empty", "error");
      return;
    }

    const new_queue = [...queue];
    const dequeue_person_number = new_queue.shift();
    this.setState({ queue: new_queue });
    toastMessage(`Dequeue ${dequeue_person_number} person from queue`);
  };

  handleReset = () => {
    this.setState({ queue: [] });
    toastMessage("Queue is reset.");
  };
  render() {
    const queue_buttons = [...this.state.queue_buttons];

    queue_buttons[0]["handler"] = this.handleEnqueue;
    queue_buttons[1]["handler"] = this.handleDequeue;
    queue_buttons[2]["handler"] = this.handleReset;
    return (
      <div className="data-structure">
        <QueueContainer queue={this.state.queue} />
        <ADTOperation data_type="Queue" buttons={this.state.queue_buttons} />
      </div>
    );
  }
}

export default Queue;
