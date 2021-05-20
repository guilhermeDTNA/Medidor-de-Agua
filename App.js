import React, {
  Component
} from 'react';

import {
  View, StyleSheet, Text, TextInput, Image, ImageBackground, Button
} from 'react-native';

export default class PrimeiroProjeto extends Component {
  
  constructor(props){
    super(props);
    this.state={consumido:0, status:'ruim', pct:'0', meta:'2000'};

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  addCopo(){
    let s = this.state;
    s.consumido += 200;

    this.atualizar();
  }

  atualizar(){
    let s = this.state;
    s.pct = Math.floor((s.consumido/s.meta)*100);

    if(s.pct>=100){
      s.status='Bom';
    }
    else{
      s.status='Ruim';
    }

    this.setState(s);
  }

  zerar(){
    let s = this.state;
    s.pct=0;
    s.consumido=0;
    s.meta=2000;

    this.atualizar()
  }

  render(){
    return(

        <View style={styles.body}>
          <ImageBackground source={require('./images/water-bg.jpg')} style={styles.bgimage} >

            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Meta</Text>
                <Text style={styles.areaDado}>{this.state.meta}ml</Text>
              </View>
            
          
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Consumido</Text> 
                <Text style={styles.areaDado}>{this.state.consumido}</Text> 
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text>  
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctTexto}>{this.state.pct}%</Text>
            </View>

            <View style={styles.btnArea}>
              <Button title="Beber 200ml" onPress={this.addCopo} />
            </View>

            <View style={styles.btnExtra}>
              
              <View style={styles.btnZerar}>
                <Button title="Zerar" onPress={this.zerar} />
              </View>

              <View style={styles.btnEspaco}>

              </View>

              <View style={styles.btnAlterar}>
                <TextInput style={styles.input} placeholderTextColor="black" placeholder="Nova Meta" onChangeText={(meta)=>this.setState({meta})}> </TextInput>
              </View>

            </View>

          </ImageBackground>
        </View>

      );
  }

}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  bgimage:{
    flex:1,
    width:null
  },
  infoArea:{
    flex:1,
    flexDirection:'row',
    marginTop:50 
  },
  area:{
    flex:1,
    alignItems:'center'
  },
  areaTitulo:{
    color:'#993399'
  },
  areaDado:{
    color:'#2b4274',
    fontSize:15,
    fontWeight:'bold'
  },
  pctArea:{
    flex:2,
    marginTop:50,
    flexDirection:'column',
    alignItems:'center'
  },
  pctTexto:{
    fontSize:70,
    color:'white',
    backgroundColor:'transparent'
  },
  btnArea:{
    marginTop:10,
    flex:2,
    alignItems:'center'
  },

  btnExtra:{
    flex:1,
    flexDirection:'row',
    paddingTop:0,
    marginTop:-20
  },

  btnZerar:{
    flex:1,
    alignItems:'flex-end',
    width:10,
    height:40
  },

  btnAlterar:{
    flex:1,
    height:40,
    alignItems:'flex-start',
    width:10
  },

  btnEspaco:{
    flex:0.5,
    alignItems:'center',
    width:5,
    height:40
  },

  input:{
    height:40,
    width:100,
    borderWidth:1,
    borderColor:'black',
    margin:10,
    padding:10,
    color:'black',
  },

});
