import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class InputAreaStore extends EventEmitter{
  constructor() {
    super()
    this.userInput = "Ok, let me think about that...";
    this.currentUser = "wolfgang-adams";

    this.handleAction = {

      "INPUT_AREA__CHANGE": function(action) {
        this.setUserInput(action.text);
      }.bind(this),

      "INPUT_AREA__SENDING": function(action) {
        this.setUserInput("");
      }.bind(this),
    };
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUserInput() {
    return this.userInput;
  }

  setUserInput(userInput) {
    this.userInput = userInput;
    this.emit("change");
  }

  handleActions(action) {
    return (this.handleAction[action.type]) ? this.handleAction[action.type](action): null;
  }


}

const inputAreaStore = new InputAreaStore;
dispatcher.register(inputAreaStore.handleActions.bind(inputAreaStore));

export default inputAreaStore;
