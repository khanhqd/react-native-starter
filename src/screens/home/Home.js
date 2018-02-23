import React, { Component } from 'react';
import { View, Button } from 'react-native-ui-lib';
import { autobind } from 'core-decorators';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import { HOME } from '../../screens';

export default class Home extends Component {

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

  openPopupAddItem() {
    Navigation.showModal({
      screen: 'stqapp.popup',
      title: 'Add ToDo',
      passProps: {},
      animationType: 'slide-up',
    });
  }

  render() {
    return (
      <View flex center testID="SPLASH_SCREEN">
        <View row style={styles.btn_container} >
          <Button
            size="medium"
            onPress={this.openPopupAddItem}
            label="ADD"
          />
          <Button
            style={styles.btn_clear}
            size="medium"
            onPress={() => { }}
            label="CLEAR"
          />
        </View>
      </View>
    );
  }
}

const styles = {
  btn_container: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  btn_clear: {
    marginLeft: 30,
  },
};
