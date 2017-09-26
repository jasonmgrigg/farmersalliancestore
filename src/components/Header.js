import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);

    this.state = {
      username: '',
      password: '',
      contributors: [
        {
          name: 'Brittany Arsi',
          link: ''
        },
        {
          name: 'Robert Garmhausen',
          link: ''
        },
        {
          name: 'Jason Grigg',
          link: ''
        },
        {
          name: 'Dylan Stump',
          link: ''
        }
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
        <a className="headerTitle">Farmers Alliance Store</a>
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
                        href={contributors.link}
                      >
                        {contributors.name}
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
