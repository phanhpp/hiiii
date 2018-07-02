import React from "react";
import {View, Dimensions } from 'react-native';
const wid = Dimensions.get('window').width;
const hei = Dimensions.get('window').height;
const Card = (props) => {
  return(
      <View style={styles.containerStyle}>
       {props.children};
      </View>
  );
};
// {props.children} renders any component that we pass to the card - component
const styles ={
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth:0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height:2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,//round up the conner of the shadow 2 = borderradius
        elevation:1,
        width: wid,
        height:hei,
        marginTop: 20,//space between components
        backgroundColor: 'white',
        

    }
}

export  {Card};
