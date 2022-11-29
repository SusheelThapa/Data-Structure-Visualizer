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
    max_queue_size: null,
  };

  componentDidMount() {
    this.setMaxQueueSize();

    /*Binding the button and their handler*/
    const queue_buttons = [...this.state.queue_buttons];

    queue_buttons[0]["handler"] = this.handleEnqueue;
    queue_buttons[1]["handler"] = this.handleDequeue;
    queue_buttons[2]["handler"] = this.handleReset;

    this.setState({ queue_buttons });
  }

  setMaxQueueSize = () => {
    /*
    The size of Queue container is 90% and that of image is 188px
    */
    const max_queue_size = Math.floor((window.innerWidth * 0.9) / 188);
    this.setState({ max_queue_size });

    /*
    Checking if the current queue size is greater than new max_queue_size or not
    If true, we will dequeue the extra element
    If false, we will leave as it is
    */

    const extra_element_count = this.state.queue.length - max_queue_size;

    if (extra_element_count > 0) {
      for (let i = 0; i < extra_element_count; i++) {
        this.handleDequeue();
      }
    }
  };

  handleWindowResize = () => {
    this.setMaxQueueSize();
  };

  handleEnqueue = () => {
    const { queue, max_queue_size } = this.state;

    if (queue.length === max_queue_size) {
      toastMessage("Queue is Full", "error");
      return;
    }

    const new_queue = [...queue];

    let number = 0;
    do {
      number = generateRandomNumber();
    } while (queue.indexOf(number) !== -1);

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
    /*Triggering resize event handler*/
    window.onresize = this.handleWindowResize;

    const { queue, queue_buttons } = this.state;

    return (
      <div className="data-structure">
        <QueueContainer queue={queue} />
        <ADTOperation data_type="Queue" buttons={queue_buttons} />
      </div>
    );
  }
}

export default Queue;
