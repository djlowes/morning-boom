import React from 'react';
import Sidebar from '../../components//shared/Sidebar';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  render() {
    return (
      <div>
        <div className="flex-wrapper">
          <div className="columns">
            <Sidebar />
            <div className="full-height dashboard-detail">
              <h2>Admin</h2>
              <div>
                <div id="main" className="container">
                  {/* Display any error or informational messages */}
                  <div className="message-list">
                    <div className="box bg-success">
                    </div>
                  </div>
                  <h1>Send SMS</h1>
                  <p>Message will be sent to entire list of subscribers.</p>
                  <form action="/api/message/send" method="POST">{/* The text of the message to send */}
                    <div className="form-group">
                      <label htmlFor="message">Enter a message</label>
                      <input
                        type="text"
                        name="message"
                        placeholder="Good Morning! Ready for another day? Let's do this."
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="imageUrl">(Optional) Image URL to send in an MMS</label>
                      <input
                        type="text"
                        name="imageUrl"
                        placeholder="http://morning-boom/some_image.png"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
