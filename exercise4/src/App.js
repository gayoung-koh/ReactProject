import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {

  scrollToBottom = () => {
    this.scrollBox.scrollToBottom();
  };

  render() {
    return (
    <div>
      <ScrollBox ref={(ref) => this.scrollBox=ref} />
      <button onClick={this.scrollToBottom}>
        맨 밑으로
      </button>
      </div>
    );
  }
}

export default App;
