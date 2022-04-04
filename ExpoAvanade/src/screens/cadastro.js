import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      base64: '',
    };
  }

  finalizarCadastro = () => {
    this.props.navigation.navigate('Login');
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainDiv}>

          <View style={styles.mainTitleSpace}>
            <TouchableOpacity style={styles.mainBtnBack} onPress={this.goBack}>
              <Image style={styles.mainImage} source={require('../../assets/img/Icone_voltar.png')} />
            </TouchableOpacity>
            <Text style={styles.mainTitle}>Cadastro</Text>
          </View>

          <View style={styles.mainFormSpace}>
            <TextInput style={styles.mainInput} placeholder='Nome Completo' placeholderTextColor='#000000'></TextInput>
            <TextInput style={styles.mainInput} placeholder='CPF' placeholderTextColor='#000000'></TextInput>
            <TextInput style={styles.mainInput} placeholder='Endereço de e-mail' placeholderTextColor='#000000'></TextInput>
            <TextInput style={styles.mainInput} placeholder='Senha' placeholderTextColor='#000000'></TextInput>
            <TextInput style={styles.mainInput} placeholder='DD/MM/AAAA' placeholderTextColor='#000000'></TextInput>
            <TouchableOpacity style={styles.mainBtnRegister} onPress={this.finalizarCadastro}>
              <Text style={styles.mainBtnText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mainTextSpace}>
            <Text style={styles.mainText}>Você será reencaminhado para a tela de login.</Text>
          </View>

        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainDiv: {
    flex: 0.85,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mainTitleSpace: {
    width: 220,
    height: 60,
    marginRight: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mainImage: {
    marginTop: 8,
    width: 20,
    height: 20,
  },
  mainTitle: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 36,
    color: '#000000',
  },
  mainFormSpace: {
    height: 510,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainInput: {
    width: 260,
    height: 60,
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 23,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#F3BC2C',
    marginTop: '8%',
  },
  mainBtnRegister: {
    width: 157,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#F3BC2C',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8%',

  },
  mainBtnBack: {
    width: 20,
    height: 20,
  },
  mainBtnText: {
    fontSize: 14,
    // fontFamily: 'IBMPlexMono-Bold',
    color: '#000000'
  },
  mainTextSpace: {
    marginTop: 20,
    height: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainText: {
    fontSize: 14,
    // fontFamily: 'ABeeZee-Regular',
    color: '#000000'
  },
});

export default Cadastro