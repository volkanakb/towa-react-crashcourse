import React from 'react';
import Card from '@styled/Card';

// TODO: add some kind of state and a function to update this state
class ClassExample extends React.Component {
  constructor(props) {
    // call constructor of parent class
    super(props);
    this.state = {
      date: null,
    };
  }

  // one of reacts lifecycle methods
  componentDidMount() {
    const now = new Date(Date.now());
    const dateParts = [now.getDay(), now.getMonth(), now.getFullYear()].join('.');

    this.setState({ date: dateParts });
  }

  // render function - must use in class components
  render() {
    return (
      <Card>
        <h2>{this.props.headline}</h2>
        <p>the date in the class component is {this.state.date}</p>
      </Card>
    );
  }
}

ClassExample.defaultProps = {
  headline: 'ClassComponent has no props',
};

export default ClassExample;
