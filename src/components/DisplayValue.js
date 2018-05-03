import React, {PropTypes,} from 'react';
import {Alert, Button, Platform, TextInput,TouchableOpacity, KeyboardAvoidingView, View, Text, StyleSheet,TouchableHighlight,ScrollView,Image, Component, AppRegistry, AsyncStorage} from "react-native";

export default class DisplayValue extends React.Component {
 constructor(props) {
      super(props);
      this.state = {
        fuelrate: '',
    }
  }
  
  Test1=()=>{
    fetch('https://ecodrive.careerity.me/getValueEco/5aeacdbd7c6f05930cbee3e8', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fuelrate: 'fuelrate',
  }),
});
      if(this.state.fuelrate = 4.1){
      return <View style={styles.footer}>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{left:15,width: 90, height: 100, backgroundColor: 'white',borderColor:'black',borderWidth:1}} >
      <Text style={{fontSize:50, alignSelf:'center', color:'black'}}>43</Text>
      <Text style={{fontSize:15, alignSelf:'center', color:'black', bottom:-1}}>%</Text>
      <Text>{this.state.fuelrate}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{left:45,width: 90, height: 100, backgroundColor: 'white',borderColor:'black',borderWidth:1}} >
      <Text style={{fontSize:50, alignSelf:'center', color:'black'}}>21</Text>
      <Text style={{fontSize:15, alignSelf:'center', color:'black', bottom:-1}}>Km/L</Text>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{left:25,width: 90, height: 100, backgroundColor: 'white',borderColor:'black',borderWidth:1}} >
      <Text style={{fontSize:50, alignSelf:'center', color:'black'}}>126</Text>
      <Text style={{fontSize:15, alignSelf:'center', color:'black', bottom:-1}}>g/Km</Text>
      </View>
      </View>
    </View>
            </View>
      }else if (this.state.fuelRate <= 4.3){
        return <View style={styles.footer1z}>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{left:15,width: 90, height: 100, backgroundColor: 'white',borderColor:'black',borderWidth:1}} >
      <Text style={{fontSize:50, alignSelf:'center', color:'black'}}>43</Text>
      <Text style={{fontSize:15, alignSelf:'center', color:'black', bottom:-1}}>%</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{left:45,width: 90, height: 100, backgroundColor: 'white',borderColor:'black',borderWidth:1}} >
      <Text style={{fontSize:50, alignSelf:'center', color:'black'}}>21</Text>
      <Text style={{fontSize:15, alignSelf:'center', color:'black', bottom:-1}}>Km/L</Text>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{left:25,width: 90, height: 100, backgroundColor: 'white',borderColor:'black',borderWidth:1}} >
      <Text style={{fontSize:50, alignSelf:'center', color:'black'}}>126</Text>
      <Text style={{fontSize:15, alignSelf:'center', color:'black', bottom:-1}}>g/Km</Text>
      </View>
      </View>
    </View>
            </View>
      }else{
        return <View style={styles.footer2z}>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{left:15,width: 90, height: 100, backgroundColor: 'white',borderColor:'black',borderWidth:1}} >
        <Text style={{fontSize:50, alignSelf:'center', color:'black'}}>43</Text>
        <Text style={{fontSize:15, alignSelf:'center', color:'black', bottom:-1}}>%</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{left:45,width: 90, height: 100, backgroundColor: 'white',borderColor:'black',borderWidth:1}} >
        <Text style={{fontSize:50, alignSelf:'center', color:'black'}}>21</Text>
        <Text style={{fontSize:15, alignSelf:'center', color:'black', bottom:-1}}>Km/L</Text>
        </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{left:25,width: 90, height: 100, backgroundColor: 'white',borderColor:'black',borderWidth:1}} >
        <Text style={{fontSize:50, alignSelf:'center', color:'black'}}>126</Text>
        <Text style={{fontSize:15, alignSelf:'center', color:'black', bottom:-1}}>g/Km</Text>
        </View>
        </View>
      </View>
              </View>
      }
  }

  render() {
    return(
      <View style={styles.mainviewStyle}>
        <ContainerView/>
        { this.Test1() }
      </View>
    );
  }
}

class ContainerView extends React.Component {
constructor(props) {
      super(props);
      this.state = {
        fuelrate: '',
    }
  
}
Test=()=>{
    fetch('https://ecodrive.careerity.me/getValueEco/5aeacdbd7c6f05930cbee3e8', {
        method: 'POST',
          headers:{
             Accept: 'application/json',
            'Content-Type': 'application/json',
        
          },
          body: JSON.stringify({
              fuelrate: this.state.fuelrate,
          })
      })
      .then((response) => response.json())
      .then ((res) =>{
                
            if(res.success === true){
                AsyncStorage.setItem('fuelrate', res.fuelrate);
            }
            else{
                alert(res.message);
            }
      })
      .done();
    if(this.state.fuelRate = 4.3){
    return <View style={{width: 1000, height: 80, backgroundColor: 'white', borderColor: 'black', borderWidth:0.2}} >    
 <Image style={styles.footerText1}
    source={require('../image/16.png')}/>
    <Image style={styles.footerText2}
          source={require('../image/17.png')}
        />
    </View>
    }else if(this.state.fuelRate < 4.3){
        return <View style={{width: 1000, height: 80, backgroundColor: '#84e184', borderColor: 'black', borderWidth:0.2}} >    
 <Image style={styles.footerText1}
    source={require('../image/9.png')}/>
    <Image style={styles.footerText2}
          source={require('../image/8.png')}
        />
    </View>
    }else if(a=='3'){
        return <View style={{width: 1000, height: 80, backgroundColor: '#ff3333', borderColor: 'black', borderWidth:0.2}} >    
 <Image style={styles.footerText1}
    source={require('../image/11.png')}/>
    <Image style={styles.footerText2}
          source={require('../image/13.png')}
        />
    </View>
    }
}

render() {
    return(
      <ScrollView style = {styles.scrollViewStyle}>
          { this.Test() }
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  mainviewStyle: {
  flex: 1,
  flexDirection: 'column',
},
wrapper:{
    flex: 1,
},
container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
},
button:{
  marginBottom: 20
},
footer: {
  position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  bottom: -10,
  backgroundColor:'white',
  flexDirection:'row',
  height:175,
  alignItems:'center',
  borderColor:'black',
  borderWidth:0.2,
},
footer1z: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'#84e184',
    flexDirection:'row',
    height:175,
    alignItems:'center',
    borderColor:'white',
    borderWidth:0.2,
  },
  footer2z: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'#ff3333',
    flexDirection:'row',
    height:175,
    alignItems:'center',
    borderColor:'white',
    borderWidth:0.2,
  },
bottomButtons: {
  alignItems:'center',
  justifyContent: 'center',
  flex:1,
},
footer1: {
  color:'black',
  fontWeight:'bold',
  fontSize:30,
  backgroundColor:'white',
},
footer2: {
    color:'black',
    fontWeight:'bold',
    fontSize:30,
    backgroundColor:'white',
  },
footer3: {
    color:'black',
    fontWeight:'bold',
    fontSize:30,
    backgroundColor:'white',
  },
footerText1: {
    bottom: -5,
    left: 195,
    width: 70,
    height: 70
  },
footerText2: {
    bottom: 60,
    left: 285,
    width: 58,
    height: 58
  },
footerText3: {
    bottom: 40,
    left: 50,
    width: 40,
    height: 40
  },
footerText4: {
    bottom: 40,
    left: 100,
    width: 40,
    height: 40
  }
,footerText5: {
    bottom: 40,
    left: 150,
    width: 40,
    height: 40
  },
  container1: {
    borderWidth: 1,
    borderColor: 'black',
    
    left:15,
  },
  container2: {
    borderWidth: 25,
    borderColor: 'white',
    left:45,
  },
  container3: {
    borderWidth: 25,
    borderColor: 'white',
    left:75,
  },  
textStyle: {
  alignSelf: 'center',
  color: 'orange'
},
scrollViewStyle: {
  borderColor: 'white'
}
});

AppRegistry.registerComponent('EcodriveProject', () => mainview) 