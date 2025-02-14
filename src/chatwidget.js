import React, { useState } from 'react';

function ChatWidget({ chatbotName }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { sender: 'User', text: input },
    ]);

    // Simulate a chatbot response (for demo purposes)
    setMessages((prev) => [
      ...prev,
      { sender: chatbotName, text: `You said: ${input}` },
    ]);

    setInput('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.messageContainer}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'User' ? 'right' : 'left' }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '1rem',
    maxWidth: '300px',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif'
  },
  messageContainer: {
    height: '200px',
    overflowY: 'auto',
    border: '1px solid #eee',
    padding: '0.5rem',
    marginBottom: '1rem',
    backgroundColor: '#fafafa'
  },
  inputContainer: {
    display: 'flex',
  },
  input: {
    flex: 1,
    padding: '0.5rem'
  },
  button: {
    padding: '0.5rem',
    marginLeft: '0.5rem'
  }
};

export default ChatWidget;
