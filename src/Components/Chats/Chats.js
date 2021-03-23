import React from 'react';
import './Chats.css';
import Chat from '../Chat/Chat';
function Chats() {
  return (
    <div className='chats'>
      <Chat
        name='Mark'
        message='If you were a Transformer… you’d be Optimus Fine.'
        timestamp='34 seconds ago'
        profilePic='https://images.unsplash.com/photo-1539664283826-8747535c24a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      />

      <Chat
        name='Maddy'
        message='Whats Up ❤'
        timestamp='2 days ago'
        profilePic='https://images.unsplash.com/photo-1594045073084-120ef0d151bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      />

      <Chat
        name='Jane'
        message='Do you like Star Wars? Because Yoda only one for me!'
        timestamp='2 week ago'
        profilePic='https://images.unsplash.com/photo-1615884822058-7bb4a4fb877e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      />

      <Chat
        name='Sarah'
        message='Is this the Hogwarts Express? Because it feels like you and I are headed somewhere magical.'
        timestamp='3 week ago'
        profilePic='https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      />
      <Chat
        name='Graham'
        message='You’re so beautiful that you made me forget my pickup line'
        timestamp='1 month ago'
        profilePic='https://images.unsplash.com/photo-1616257892423-861f4e77bd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      />

      <Chat
        name='Christian'
        message='Well, here I am. What are your other two wishes?'
        timestamp='3 months ago'
        profilePic='https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=830&q=80'
      />

      <Chat
        name='Sandara'
        message='Are you French? Because Eiffel for you.'
        timestamp='3 months ago'
        profilePic='https://images.unsplash.com/photo-1597265870741-c672c939ca0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'
      />

      <Chat
        name='Blake'
        message='Baby, if you were words on a page, you’d be fine print.'
        timestamp='1 year ago'
        profilePic='https://images.unsplash.com/photo-1615694651130-b7584ffc9686?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      />
    </div>
  );
}

export default Chats;
