import React from "react";

export default class Header extends React.Component {
  styles = {
    fontFamily: "sans-serif",
    textAlign: "left",
    display: "flex",
    paddingLeft: "0px",
    justifyContent: "space-between",
    listStyle: "none"
  };

  render() {
    return (
      <div>
        <ul style={this.styles}>
          {this.props.menuItems.map((item, i) => {
            return (
              <li key={item.label}>
                <span onClick={this.props.changeContentMethod}>
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
