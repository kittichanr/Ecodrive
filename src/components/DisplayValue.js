import React, {PropTypes,} from 'react';
import {Alert, Button, Platform, TextInput,TouchableOpacity, KeyboardAvoidingView, View, Text, StyleSheet,TouchableHighlight,ScrollView,Image, Component, AppRegistry, AsyncStorage,RefreshControl} from "react-native";

export default class DisplayValue extends React.Component {
 constructor(props) {
      super(props);
      this.state = {
    co2:'',
    fuelrate:'',
    acceleration:'',
    StandardFuelrate : 23.3,
 
    }
  }

 componentDidMount(){
    return fetch('https://ecodrive.careerity.me/getValueEco/5aeacdbd7c6f05930cbee3e8')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          co2: responseJson.co2,
          fuelrate: responseJson.fuelrate,
          acceleration:responseJson.acceleration
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }


  Test1(){
   
if(this.state.fuelrate == this.state.StandardFuelrate){ 
  return (
  <View style={styles.footer}>
  <View style={styles.box}>
  <View style={styles.BgBox1} >
  <Text style={styles.TextData1}>acceleration</Text>
  <Text style={styles.TextData}>{this.state.acceleration}</Text>
  <Text style={styles.TextUnit}>%</Text>
  </View>
  <View style={styles.box}>
  <View style={styles.BgBox2} >
  <Text style={styles.TextData1}>fuelrate</Text>              
  <Text style={styles.TextData}>{this.state.fuelrate}</Text>
  <Text style={styles.TextUnit}>Km/L</Text>
  </View>
  </View>
  <View style={styles.box}>
  <View style={styles.BgBox3} >
  <Text style={styles.TextData1}>co2</Text>              
  <Text style={styles.TextData}>{this.state.co2}</Text>
  <Text style={styles.TextUnit}>g/Km</Text>
  </View>
  </View>
</View>
  </View>
  )
}
  else if (this.state.fuelrate > this.state.StandardFuelrate){
       
        return (
      <View style={styles.footer1z}>
      <View style={styles.box}>
      <View style={styles.BgBox1}>
      <Text style={styles.TextData1}>acceleration</Text>            
      <Text style={styles.TextData}>{this.state.acceleration}</Text>
      <Text style={styles.TextUnit}>%</Text>
      </View>
      <View style={styles.box}>
      <View style={styles.BgBox2} >
      <Text style={styles.TextData1}>fuelrate</Text>            
      <Text style={styles.TextData}>{this.state.fuelrate}</Text>
      <Text style={styles.TextUnit}>Km/L</Text>
      </View>
      </View>
      <View style={styles.box}>
      <View style={styles.BgBox3} >
      <Text style={styles.TextData1}>co2</Text>            
      <Text style={styles.TextData}>{this.state.co2}</Text>
      <Text style={styles.TextUnit}>g/Km</Text>
      </View>
      </View>
    </View>
            </View>
        )
      }
      else{
        return ( 
        <View style={styles.footer2z}>
        <View style={styles.box}>
        <View style={styles.BgBox1} >
        <Text style={styles.TextData1}>acceleration</Text>                    
        <Text style={styles.TextData}>{this.state.acceleration}</Text>
        <Text style={styles.TextUnit}>%</Text>
        </View>
        <View style={styles.box}>
        <View style={styles.BgBox2} >
        <Text style={styles.TextData1}>fuelrate</Text>                    
        <Text style={styles.TextData}>{this.state.fuelrate}</Text>
        <Text style={styles.TextUnit}>Km/L</Text>
        </View>
        </View>
        <View style={styles.box}>
        <View style={styles.BgBox3}>
      <Text style={styles.TextData1}>co2</Text>                    
        <Text style={styles.TextData}>{this.state.co2}</Text>
        <Text style={styles.TextUnit}>g/Km</Text>
        </View>
        </View>
      </View>
    
              </View>
        )
      }
  }
  render() {
    return(
      <View style={styles.mainviewStyle}>
        {<ContainerView/>}
        { this.Test1() }
      </View>
    );
  }  
}


class ContainerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  co2:'',
  fuelrate:'',
  acceleration:'',
  StandardFuelrate : 23.3
  }
}

componentWillMount(){
  return fetch('https://ecodrive.careerity.me/getValueEco/5aeacdbd7c6f05930cbee3e8')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        co2: responseJson.co2,
        fuelrate: responseJson.fuelrate,
        acceleration:responseJson.acceleration
      }, function(){

      });
    })
    .catch((error) =>{
      console.error(error);
    });
}


Test(){
 
if(this.state.fuelrate == this.state.StandardFuelrate){ 
return (
          <View style={styles.Nav1}>     
          <Text>SUZUKI SWIFT GLX-Navi 1.2L CVT</Text> 
          <Text>Fuelrate: 23.3 KM/L</Text> 
          <Text>CO2 : 100 G/KM</Text> 
          <Text>FuelType : E20</Text> 
         <Image style={styles.footerText1} source={require('../image/16.png')}/> 
            <Image style={styles.footerText2} source={require('../image/17.png')}/> 
            </View>
)
}
else if(this.state.fuelrate > this.state.StandardFuelrate){ 
  return (
            <View style={styles.Nav2}>     
          <Text>SUZUKI SWIFT GLX-Navi 1.2L CVT</Text> 
          <Text>Fuelrate: 23.3 KM/L</Text> 
          <Text>CO2 : 100 G/KM</Text> 
          <Text>FuelType : E20</Text> 
          <Image style={styles.footerText1} source={require('../image/9.png')}/> 
              <Image style={styles.footerText2} source={require('../image/8.png')}/> 
              </View>
  )
        } 
        else{ 
          return (
                    <View style={styles.Nav3}>    
                  <Text>SUZUKI SWIFT GLX-Navi 1.2L CVT</Text> 
                  <Text>Fuelrate: 23.3 KM/L</Text> 
                  <Text>CO2 : 100 G/KM</Text> 
                  <Text>FuelType : E20</Text> 
                   <Image style={styles.footerText1} source={require('../image/11.png')}/> 
                      <Image style={styles.footerText2} source={require('../image/13.png')}/> 
                      </View>
          )
                } 
             }
        render() { 
            return( 
              <ScrollView style = {styles.scrollViewStyle}> 
                  { this.Test() }
                  <Image style = {{width: 365,height: 380,}}
                source={require('../image/1234.png')}
        />
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
Nav1:{
  width: 1000, 
  height: 80, 
  backgroundColor: 'white', 
  borderColor: 'black', 
  borderWidth:0.2,
},
Nav2:{
  width: 1000, 
  height: 80, 
  backgroundColor: '#84e184', 
  borderColor: 'black', 
  borderWidth:0.2,
},
Nav3:{
  width: 1000, 
  height: 80, 
  backgroundColor: '#ff3333', 
  borderColor: 'black', 
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
    bottom: 70,
    left: 195,
    width: 70,
    height: 70
  },
footerText2: {
    bottom:135,
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
},
box:{
  flex: 1, 
  flexDirection: 'row'
},
BgBox1:{
  left:15,
  width: 90, 
  height: 100, 
  backgroundColor: 'white',
  borderColor:'black',
  borderWidth:1
},
BgBox2:{
  left:45,
  width: 90, 
  height: 100, 
  backgroundColor: 'white',
  borderColor:'black',
  borderWidth:1
},
BgBox3:{
  left:25,
  width: 90, 
  height: 100, 
  backgroundColor: 'white',
  borderColor:'black',
  borderWidth:1
},
TextData1:{
  fontSize:15, 
  alignSelf:'center', 
  color:'black'
},
TextData:{
  fontSize:30, 
  alignSelf:'center', 
  color:'black'
},
TextUnit:{
  
  fontSize:15, 
  alignSelf:'center', 
  color:'black', 
  bottom:-10
}
});




AppRegistry.registerComponent('EcodriveProject', () => mainview) 