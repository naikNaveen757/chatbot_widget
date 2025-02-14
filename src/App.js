import React from 'react';
import ChatWidget from './chatwidget';

function App() {
  const chatbotName = window.CHATBOT_NAME || 'Default Chatbot';

  return (
    <div className="App">
      <h1>Welcome to {chatbotName}</h1>
      <ChatWidget chatbotName={chatbotName} />
    </div>
  );
}

export default App;
