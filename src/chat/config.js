import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Booking from "../Booking";
import DogPicture from "../components/widget";
import Options from "../Options";


const Config = {
    botName: 'Regina Food Bank',
    initialMessages: [createChatBotMessage("Hi! I'm FoodBankRegina what is your question?"),
    createChatBotMessage("Your Options are: Sign Up, Booking, Order Status, FAQ",
    {widget: "options"}),
    createChatBotMessage("Type menu to go the menu options")
    ],

    costomComponent: {
        botAvatar: (props) => <DogPicture {...props} />,
    },
    customStyles: {
        botMessageBox: {
          backgroundColor: "orange",
        },
        chatButton: {
          backgroundColor: "orange",
        },
    },
    state: {
      messages_user: [],
      current_menu: "main",
      food_order: null,
      isUserSignin: false,
    },
    widgets: [
      {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
      },
      {
        widgetName: "booking",
        widgetFunc: (props) => <Booking {...props} />,
      },
    ],
}

export default Config