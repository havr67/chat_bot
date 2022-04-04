
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      console.log(this.state);
      message = message.toLowerCase();

      if (message.includes("help")) {
        this.actionProvider.helphandler();
      }

      if (message.includes("menu")) {
        this.actionProvider.menuhandler();
      }

      if (message === "nikita") {
        this.actionProvider.namehandler();
      }

      if (message.includes("nikita@gmail.com")) {
        this.actionProvider.emailhandler();
      }

      if(message.includes("sign up")) {
        this.actionProvider.signuphandler();
      }

      if(message.includes("1111")) {
        this.actionProvider.corderanswerhandler();
      }
      if (message.includes("1112" || "1113" || "1114" || "1115")) {
        this.actionProvider.iorderanswerhandler();
      }
      
    }
}
  
export default MessageParser;

