import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import InfoSection from "./InfoSection";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const menuItems = [
  {
    label: "Inspiratie",
    link: "inspiratie"
  },
  {
    label: "Conferentie",
    link: "js-heroes"
  },
  {
    label: "Cluj",
    link: "cluj"
  }
];

const infoSections = {
  'cluj': "test",
  'conferentie': "test 2",
  'inspiratie': "test 3"
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "inspiratie",
      content: infoSections["cluj"]
    };
  }

  render() {
    return (
      <div style={styles}>
        <Header
          changeContentMethod={this.changeContent}
          menuItems={menuItems}
        />
        <InfoSection content={this.state.content} />
      </div>
    );
  }
  changeContent = e => {
    this.setState(
      {
        value: e.target.innerHTML,
        content: infoSections[`${e.target.innerHTML.toLowerCase()}`]
      }

    );
  };
}

render(<App />, document.getElementById("root"));
