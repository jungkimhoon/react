import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        name: {name} <br />
        children: {children} <br />
        favNum : {favoriteNumber} <br />
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: 'default',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
