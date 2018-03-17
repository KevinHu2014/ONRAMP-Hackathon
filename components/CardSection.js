import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    padding: 15,
    backgroundColor: '#fff',
    //justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
  }
};

export default CardSection;