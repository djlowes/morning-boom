import React from 'react';
import Sidebar from '../../components//shared/Sidebar';
// import './main.css';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flex-wrapper">
          <div className="columns">
            <Sidebar />
            <div className="full-height dashboard-detail">
              <h2>Chat</h2>
              <div id="login" className="popup">
          <h3>Log In</h3>
          <input id="login-name" placeholder="Identity" />
          <button id="login-button" className="red-button">Log In As Guest</button>
          <p>-or-</p>
          <div className="g-signin2" data-onsuccess="googleLogIn" data-theme="light" />
        </div>
        <div id="add-member" className="popup">
          <h3>Add User<div className="remove-button glyphicon glyphicon-remove" /></h3>
          <input id="add-identity" placeholder="Identity" />
          <button id="add-button" className="red-button">Add</button>
        </div>
        <div id="invite-member" className="popup">
          <h3>Invite User<div className="remove-button glyphicon glyphicon-remove" /></h3>
          <input id="invite-identity" placeholder="Identity" />
          <button id="invite-button" className="red-button">Invite</button>
        </div>
        <div id="update-channel" className="popup">
          <h3>Edit Channel<div className="remove-button glyphicon glyphicon-remove" /></h3>
          <input id="update-channel-display-name" placeholder="Display Name" />
          <input id="update-channel-unique-name" placeholder="Unique Name (Optional)" />
          <input id="update-channel-desc" placeholder="Description (Optional)" />
          <input disabled="true" type="checkbox" id="update-channel-private" /><label>Private Channel</label>
          <button id="update-channel-submit" className="red-button">Update Channel</button>
        </div>
        <div id="create-channel" className="popup">
          <h3>Create Channel<div className="remove-button glyphicon glyphicon-remove" /></h3>
          <input id="create-channel-display-name" placeholder="Display Name" />
          <input id="create-channel-unique-name" placeholder="Unique Name (Optional)" />
          <input id="create-channel-desc" placeholder="Description (Optional)" />
          <input type="checkbox" id="create-channel-private" /><label>Private Channel</label>
          <button id="create-new-channel" className="red-button">Create Channel</button>
        </div>
        <div id="overlay" />
        <div id="sidebar">
          <div id="profile">
            <img />
            <label />
            <div id="presence" />
          </div>
          <div id="channels">
            <div id="invited-channels">
              <ul />
            </div>
            <div id="my-channels">
              <ul />
            </div>
            <div id="known-channels">
              <ul />
            </div>
            <div id="public-channels">
              <ul />
            </div>
            <div id="sidebar-footer">
              <button id="create-channel-button" className="red-button">Create Channel</button>
            </div>
          </div>
        </div>
        <div id="no-channel">
          <p>You are not currently viewing a Channel.</p>
        </div>
        <div id="channel">
          <div id="channel-info">
            <h1 id="channel-title" />
            <h2 id="channel-desc" />
            <button id="edit-channel" className="white-button">Edit Channel</button>
            <button id="delete-channel" className="red-button">Delete Channel</button>
          </div>
          <div id="channel-body">
            <div id="channel-chat">
              <div id="channel-messages"><ul /></div>
              <div id="channel-message-send">
                <div id="typing-indicator"><span /></div>
                <input type="textbox" id="message-body-input" />
                <button id="send-message" className="red-button">Send</button></div>
            </div>
            <div id="channel-join-panel">
              <button id="join-channel" className="red-button">Join this Channel</button></div>
          </div>
          <div id="channel-members">
            <h3>Members</h3>
            <button id="add-user" className="red-button">Add</button>
            <button id="invite-user" className="red-button">Invite</button>
            <ul />
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
