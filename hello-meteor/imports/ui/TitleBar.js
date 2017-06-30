import React from 'react';
import PropTypes from 'prop-types';



export default class TitleBar extends React.Component {
     render() {
     	return (
          <div>
             <h1>{this.props.title}</h1>
             <h2>{this.props.subtitle}</h2>
          </div>
     	);
     }
}

TitleBar.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string
};



TitleBar.defaultProps = {
  // title: 'Default title'
};

