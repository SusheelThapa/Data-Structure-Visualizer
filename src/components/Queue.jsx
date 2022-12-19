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
        id: "enqueue",
        name: "Enqueue",
        type: "primary",
      },
      {
        id: "dequeue",
        name: "Dequeue",
        type: "primary",
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
        id: "front",
        name: "Front",
        type: "info",
      },
      {
        id: "queuesize",
        name: "Queue Size",
        type: "info",
      },
      {
        id: "reset",
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

    /*Binding the button and their handler*/
    for (let button of queue_buttons) {
      button["handler"] = this.getButtonHandler(button.id);
    }

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

  getButtonHandler = (id) => {
    if (id === "enqueue") {
      return this.handleEnqueue;
    } else if (id === "dequeue") {
      return this.handleDequeue;
    } else if (id === "reset") {
      return this.handleReset;
    } else if (id === "front") {
      return this.handleFront;
    } else if (id === "isfull") {
      return this.handleIsFull;
    } else if (id === "isempty") {
      return this.handleIsEmpty;
    } else if (id === "queuesize") {
      return this.handleQueueSize;
    }
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

    toastMessage(`Enqueue ${number} person in queue`, "success");
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

    toastMessage(
      `Dequeue ${dequeue_person_number} person from queue`,
      "success"
    );
  };
  handleIsFull = () => {
    const { queue, max_queue_size } = this.state;

    queue.length === max_queue_size
      ? toastMessage("Queue is Full", "info")
      : toastMessage("Queue isn't Full", "info");
  };

  handleIsEmpty = () => {
    const { queue } = this.state;

    queue.length === 0
      ? toastMessage("Queue is empty", "info")
      : toastMessage("Queue isn't empty", "info");
  };

  handleFront = () => {
    toastMessage(`Person ${this.state.queue[0]} is in front`, "info");
  };

  handleQueueSize = () => {
    toastMessage(
      `The size of the queue is ${this.state.max_queue_size}.`,
      "info"
    );
  };

  handleReset = () => {
    this.setState({ queue: [] });

    toastMessage("Queue has been reset.", "success");
  };

  render() {
    /*Triggering resize event handler*/
    window.onresize = this.handleWindowResize;

    const { queue, queue_buttons } = this.state;

    return (
      <div className="container text-center data-structure" id="queue">
        <div className="row ">
          <div className="col flex-c-c">
            <QueueContainer queue={queue} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ADTOperation data_type="Queue" buttons={queue_buttons} />
          </div>
        </div>
      </div>
    );
  }
}

export default Queue;
