import React from 'react';
import { Stylesheet, Text, View, TextInput, Button, Image, WebView, Linking} from 'react-native';
import Expo from "expo";


//Use google sign in fonts(for whole body text), sidebar, 50%? 40%? need to use react for the project?;

export default class Gcontrols extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            num:0,
            itemName:""
        }
        
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        
    }
    
    
    
    login = async() => {
        try {
            const result = await Expo.Google.logInAsync({
                iosClientId: "314360845682-dnu615bl3jc76omfgssh6779o29h49je.apps.googleusercontent.com",
                scopes:['profile']
            }).then ((user)=>{
                if(user.type == "success"){
                    //var token = resp.token;
                    
                    var page = "unorganized";
//                    console.log(resp);
                    
                    var state = true;
                    
                    this.props.setIdToken(user.idToken);
                    this.props.setAccessToken(user.accessToken);
                    this.props.changePage(page);
                }
            })
            
            console.log(result);
        } catch(e){
            console.log(e);
            
        }
        
    }
  
  

    
    signup(){
        Linking.openURL('http://accounts.google.com/SignUp?hl=en')
        
        
    }
    
    render(){
        
        
    
        return(
            
            <View>
                <View style={{justifyContent: 'center',
                alignItems: 'center'}}>
            
                    <Image style={{width:150, height:180, marginBottom:70}} source={require('../imgs/logo.png')}
                    />
                </View>
                    
                <View style={{width: 300, marginTop:10, marginBottom:15, backgroundColor:"#4C8BF5", padding:10}}>
                    
                    <Image style={{top:13, position:'absolute', width:30, height:30}} source={require('../imgs/google.png')}
                    />
                                   
                    <Button color="#fff" 
                        title="Login With Google" fontSize="20"
                        onPress={this.login}
                    />
                </View>
                
                <View style={{width: 300, marginTop:15, marginBottom:10, backgroundColor:"#4C8BF5", padding:10}}>
                    
                    <Image style={{top:13, padding:20, position:'absolute', width:30, height:30}} source={require('../imgs/google.png')}
                    />
                                                                                              
                    <Button color="#fff" 
                        title="Sign Up" fontSize="20"
                    onPress={this.signup}
                    />
                </View>
                
            
            
            </View>
        
        );       
    }   
}