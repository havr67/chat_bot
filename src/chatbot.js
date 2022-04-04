import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import Config from './chat/config'
import MessageParser from './chat/MessageParser'
import ActionProvider from './chat/ActionProvider'


export const chatbot = () => {
  return (
    <div>
      <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};