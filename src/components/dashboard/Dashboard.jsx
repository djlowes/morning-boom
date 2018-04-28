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
              <h2>Dashboard</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
