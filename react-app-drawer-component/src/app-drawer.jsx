import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.openCloseAppDrawer = this.openCloseAppDrawer.bind(this);
  }

  openCloseAppDrawer(event) {
    const { isOpen } = this.state;
    if (isOpen) this.setState({ isOpen: false });
    else this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <i
          className="fas fa-bars menu-icon"
          onClick={this.openCloseAppDrawer}
        >
        </i>
          <div
            className={isOpen ? 'shade active' : 'shade'}
            onClick={this.openCloseAppDrawer}
          >
          </div>
          <div className={isOpen ? 'menu active' : 'menu'}>
            <h2>Menu</h2>
            <ul>
              <li onClick={this.openCloseAppDrawer}>
                <a href="#">About</a>
              </li>
              <li onClick={this.openCloseAppDrawer}>
                <a href="#">Get Started</a>
              </li>
              <li onClick={this.openCloseAppDrawer}>
                <a href="#">Sign In</a>
              </li>
            </ul>
        </div>

      </>
    );
  }
}

export default AppDrawer;
