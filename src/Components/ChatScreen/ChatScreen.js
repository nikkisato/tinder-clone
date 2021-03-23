import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Maddy',
      image:
        'https://images.unsplash.com/photo-1594045073084-120ef0d151bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      message: 'Whats Up ❤',
    },
    {
      name: 'Maddy',
      image:
        'https://images.unsplash.com/photo-1594045073084-120ef0d151bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      message: 'Hows it going?',
    },
    {
      message: 'Hi! How are you?!',
    },
  ]);

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timeStamp'>
        YOU MATCHED WITH MADDY ON 10/08/20
      </p>
      {messages.map(message =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='chatScreen__image'
              alt={message.name}
              src={message.image}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}

      <form className='chatScreen__input'>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className='chatScreen__inputField'
          placeholder='type a messgae...'
          type='text'
        />
        <button
          onClick={handleSend}
          type='submit'
          className='chatScreen__inputButton'
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
