
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   helphandler = () => {
    const message = this.createChatBotMessage("Sign Up Help");
    const message1 = this.createChatBotMessage("Sign Up can be done in our Bot system")
    const message2 = this.createChatBotMessage ("1. Click our friendly blue chatbot bottom right")
    const message3 = this.createChatBotMessage("2. Follow the instructions")
    const message4 = this.createChatBotMessage("3. Only one account per family * All accounts are keeping as private privacy")
    this.set_chat_botstate(message)
    this.set_chat_botstate(message1)
    this.set_chat_botstate(message2)
    this.set_chat_botstate(message3)
    this.set_chat_botstate(message4)
  }

  signuphandler = () => {
    const message = this.createChatBotMessage("What is your name?")
    this.set_chat_botstate(message);
  }

  namehandler = () => {
    const message = this.createChatBotMessage("What is your email?")
    this.set_chat_botstate(message);
  }

  emailhandler = () => {
    const message = this.createChatBotMessage("Your email is saved")
    const message1 = this.createChatBotMessage("Now you can log in with this email")
    const message2 = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "options",
        loading: true,
        terminateLoading: true,
      }
    )
    this.set_chat_botstate(message);
    this.set_chat_botstate(message1);
    this.set_chat_botstate(message2);
  }

  bookinghandler = () => {
    const message = this.createChatBotMessage("Booking")
    const message1 = this.createChatBotMessage("Choose option", {
      widget: "booking",
    })
    this.set_chat_botstate(message);
    this.set_chat_botstate(message1);
  }

  deliveryhandler = () => {
    const message = this.createChatBotMessage("Type your address")
    this.set_chat_botstate(message);
  }

  pickuphandler = () => {
    const message = this.createChatBotMessage("Here is your order number")
    const message1 = this.createChatBotMessage("1112")
    this.set_chat_botstate(message);
    this.set_chat_botstate(message1);
  }
  
  emergencyhandler = () => {
    const message = this.createChatBotMessage("Please call our number (306) 791-6533")
    this.set_chat_botstate(message);
  }

  orderhandler = () => {
    const message = this.createChatBotMessage("Type your order status")
    this.set_chat_botstate(message);
  }

  corderanswerhandler = () => {
    const message = this.createChatBotMessage("Type your order 1111 is on its way")
    this.set_chat_botstate(message);
  }

  iorderanswerhandler = () => {
    const message = this.createChatBotMessage("Order doesnt exist")
    this.set_chat_botstate(message);
  }

  menuhandler = () => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "options",
        loading: true,
        terminateLoading: true,
      }
    )
    this.set_chat_botstate(message)
  }

  faqhandler = async () => {
    const response = await fetch("http://localhost:7777/nikita/faq", {method: 'GET'})
    const data = await response.json()

    const message = this.createChatBotMessage(data.topic);
    const message1 = this.createChatBotMessage(data.line1)
    const message2 = this.createChatBotMessage (data.line2)
    const message3 = this.createChatBotMessage(data.line3)
    const message4 = this.createChatBotMessage(data.line4)
    const message5 = this.createChatBotMessage(data.line5)
    this.set_chat_botstate(message)
    this.set_chat_botstate(message1)
    this.set_chat_botstate(message2)
    this.set_chat_botstate(message3)
    this.set_chat_botstate(message4)
    this.set_chat_botstate(message5)
  }


   set_chat_botstate = (message) => {
     this.setState(state => ({...state, messages: [...state.messages, message]}));
   }
 }

 
 export default ActionProvider;