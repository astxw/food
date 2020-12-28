import React, { Component } from "react";
import {Left, Icon, Text, StatusBar, TouchableOpacity, View, Image,Button} from "react-native";

class TextInANest extends Component {

  render() {
    return (
        

        <View style={{flex:1, width : "100%" , height : "100%" , backgroundColor : "#fcaf03"
    }}>
         <Image 
       style={{width: 240, height: 300}}
       
       source = {require('../assets/images/s.png')} 
      />     
        <StatusBar backgroundColor="#fcaf03" barStyle="dark-content" />

        <Text 
             style={{ height : 230 ,width : "46%" , textAlign : "left" , marginLeft : "6%" , fontWeight: "bold" , fontSize: 43 , marginTop: 50, color:'#302413'}}>
            Welcome To Food </Text>

            <TouchableOpacity style={{ borderWidth : 0, height : 47, width : "50%"
            , justifyContent : "center" , borderTopLeftRadius : 20 ,borderBottomLeftRadius:20,
            backgroundColor : "#ffffff" , alignSelf : "flex-end"
            }}
            onPress={() => this.props.navigation.navigate('open')}
            >       
            
                  <Text style={{color : "#464646", textAlign : "center",fontSize: 17, fontWeight: "bold" }}> Next </Text>
            </TouchableOpacity>
            
        </View>
    );
  }
}

export default TextInANest;
