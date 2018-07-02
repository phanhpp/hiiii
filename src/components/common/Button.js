import React from "react";
import { Text, TouchableOpacity} from 'react-native';
// randomname is passed to Button as a prop - destructured
const Button = ({randomname,children, onPress}) => {
    const {buttonStyle,textStyle} = styles;
    return (
        <TouchableOpacity 
        onPress={onPress}// onPress={this.1ham}
        style = {buttonStyle}>
        <Text style = {textStyle}>
        {children}
        </Text>
      </TouchableOpacity>
        
    );
};
const styles = {
    textStyle:{
        alignSelf: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: '600', //boldness
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle:{
        flex:1, // expand as much in width as it can
        alignSelf: 'stretch', // postion itself to fit its container
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',//blue
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'gray',
        
        
       

    }
}

export  {Button};