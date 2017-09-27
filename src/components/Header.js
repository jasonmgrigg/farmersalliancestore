import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);

    this.state = {
      contributors: [
        {
          name: '134 South Chatham Avenue',
          information: 'Siler City, NC  27344'
        },
        {
          name: ' ',
          information: '919-742-3020'
        },
      ],
      rowsToDisplay: 0,
      expanded: false,
      str: '',
      browse: <div />,
      status: this.props.status
    };
  }


  showMore() {
    this.state.rowsToDisplay === 0
      ? this.setState({
          rowsToDisplay: this.state.contributors.length,
          expanded: true
        })
      : this.setState({ rowsToDisplay: 0, expanded: false });
  }


  render() {
    return (
      <div className="fullHeader">
        <a className="headerTitle">FARMERS ALLIANCE STORE</a>
        <div className="headerInfo">

            <h3 className="headerSubtitle">Contact Us</h3>
        <div className="navigation">
          <div className="allContributorsContainer">
            <div className="allContributorsColumn">
              <ul className="contributeList">
                {this.state.contributors
                  .slice(0, this.state.rowsToDisplay)
                  .map((contributors, i) =>
                    <li key={i}>
                      <a
                        className="contributorsListItem"
                      >
                        {contributors.name}
                        <br />
                        {contributors.information}
                      </a>
                    </li>
                  )}
              </ul>
              <p>
                <a onClick={this.showMore}>
                  {this.state.expanded
                    ? <span className="showMore">- Hide -</span>
                    : <span className="showMore">About Us</span>}
                </a>
              </p>
            </div>
          </div>
          </div>


        </div>
      </div>
    );
  }
}

export default Header;
