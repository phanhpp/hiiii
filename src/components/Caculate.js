import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {Button, Card, CardSection,Input} from "./common/"


class LoginForm extends Component {
   constructor(props) {
       super(props)
       this.state = { 
           f1 : '',
           f2: '',
           sum : '',
           hieu: '',
           tich : '',
           thuong: '',
           check: false
        }
       
     }
     tinhTong = () => {
        const {f1,f2} = this.state
        this.setState({
         sum: f1  && f2 ? f1 + f2 : null
         });
     }

    tinhHieu = () => {
        const {f1,f2} = this.state
        this.setState({
         hieu: f1  && f2 ? f1 - f2 : null
         });
    }

    tinhTich = () => {
        const {f1,f2} = this.state
        this.setState({
         tich: f1  && f2 ? f1 *f2 : null
         });
    }

    tinhThuong = () => {
        const {f1,f2} = this.state
        this.setState({
         thuong: f1  && f2 ? f1/f2 : null
         });
    }
    

    


    // showAlert = () => {
    //     this.setState({check : !this.state.check})
    //  }
    //  showInfo = () => {
    //     if(this.state.check){
    //          return this.caculateSum()
             
    //     }
    // }
    render() { 
        return(
         <Card>
             <CardSection>
                 <Input
                 placeholder = ''
                 lable = 'No.1'
                 value = {this.state.f1}//
                 onChangeText={(txt) => this.setState({f1: parseInt(txt)})}
                 />
             </CardSection> 
             <CardSection>
                 <Input
                 placeholder = ''
                 lable = 'No.2'
                 value = {this.state.f2}//
                 onChangeText={(txt) => this.setState({f2 :parseInt(txt)})}
                 />
             </CardSection>
              
             <CardSection>
                 <Button onPress = {this.tinhTong} > 
                     +
                 </Button>
                 
             </CardSection> 
              <Text>{  this.state.sum}</Text>

              <CardSection>
                 <Button onPress = {this.tinhHieu} > 
                     -
                 </Button>  
                 
             </CardSection> 
             <Text>{  this.state.hieu}</Text>
             
             <CardSection>
                 <Button onPress = {this.tinhTich} > 
                     *
                 </Button>  
             </CardSection> 
             <Text>{  this.state.tich}</Text>
             
              <CardSection>
                 <Button onPress = {this.tinhThuong} > 
                     /
                 </Button>  
             </CardSection> 
             <Text>{  this.state.thuong}</Text>
             
         </Card>
          

 
        );
    }
}
const styles = {
    imageStyle:{
        height: 300,
        width: null,
        flex: 1
    }
}

export default LoginForm;