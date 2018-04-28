import React from 'react';
import Sidebar from '../../components//shared/Sidebar';

export default class MyProfile extends React.Component {
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
              <h2>My Profile</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
