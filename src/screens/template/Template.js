import React, { Component } from 'react';
import { View } from 'react-native-ui-lib';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { HOME } from '../../screens';

export default class Template extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  @autobind
  onPress() {
    this.props.navigator.push({
      screen: HOME,
      passProps: {
        id: 1,
      },
    });
  }

  render() {
    return (
      <View flex center testID="SPLASH_SCREEN">
        <View />
      </View>
    );
  }
}
