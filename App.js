import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
    playSound = async () => {
        await Audio.Sound.createAsync(
            {
                uri: "https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3"
            },
            { shouldPlay: true }
        );
    }
    render() {
        return(
            <TouchableOpacity
            style = {{
                backgroundColor: "red",
                width: 250,
                height: 80,
                borderRadius: 200,
                marginLeft: 40,
                marginTop: 50,
                alignItems: "center",
                justifyContent: "center"
            }}
            onPress = {this.playSound}>
                <Text style = 
                {{
                    fontWeight: "bold",
                    fontSize: 10
                }}>
                    Sound1
                </Text>
            </TouchableOpacity>
        );
    }
}

class SoundButton2 extends React.Component {
    playSound = async () => {
        await Audio.Sound.createAsync(
            {
                uri: "https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3"
            },
            { shouldPlay: true }
        );
    }
    render() {
        return(
            <TouchableOpacity
            style = {{
                backgroundColor: "yellow",
                height: 80,
                borderRadius: 200,
                marginLeft: 40,
                marginTop: 50,
                alignItems: "center",
                justifyContent: "center"
            }}
            onPress = {this.playSound}>
                <Text style = 
                {{
                    fontWeight: "bold",
                    fontSize: 10
                }}>
                    Sound2
                </Text>
            </TouchableOpacity>
        );
    }
}

class SoundButton3 extends React.Component {
    playSound = async () => {
        await Audio.Sound.createAsync(
            {
                uri: "https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3"
            },
            { shouldPlay: true }
        );
    }
    render() {
        return(
            <TouchableOpacity
            style = {{
                backgroundColor: "green",
                height: 80,
                borderRadius: 200,
                marginLeft: 40,
                marginTop: 50,
                alignItems: "center",
                justifyContent: "center"
            }}
            onPress = {this.playSound}>
                <Text style = 
                {{
                    fontWeight: "bold",
                    fontSize: 10
                }}>
                    Sound3
                </Text>
            </TouchableOpacity>
        );
    }
}

class StopButton extends React.Component {
    render() {
      return(
          <TouchableOpacity
          style = {{
            backgroundColor:"black" ,
            width:100 ,
            height:100 , 
            borderRadius:50 ,
            marginLeft:120,
            marginTop:40,
            justifyContent:"center" ,
            alignItems:"center"
          }}>
              <Text 
              style = {{
                  fontWeight: "bold",
                  fontSize: 15
              }}
          onPress = {() => {
              Audio.setIsEnabledAsync(false)
          }}>
            </Text>
           </TouchableOpacity>
      );
  }

export default class App extends React.Component {
    render() {
        return(
            <View>
                <Text style = {{
                    marginTop: 30
                }}>
                    </Text>
                    <SoundButton/>
                    <SoundButton2/>
                    <SoundButton3/>
                    <SoundButton4/>
                    <StopButton/>
            </View>
        );
    }
}