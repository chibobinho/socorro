import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Senha: '',
      MensagemErro: '',
      idLoading: false
    };
  }

  realizarBusca = () => {
    this.props.navigation.navigate('Pesquisa');
  }

  render() {
    return (
      <View style={styles.main}>

        <MapView style={styles.mainMap}>
          <Marker coordinate={{
            latitude: -23.5344611,
            longitude: -46.6477011,
          }} />
        </MapView>

        <View style={styles.mainNav}>
          <View style={styles.mainMenuNav}>

            <View style={styles.mainDiv}>

              {/* <TextInput style={styles.mainMenuInput}
                placeholder='Para onde?'
                placeholderTextColor='#000000'>
              </TextInput>
              <TouchableOpacity style={styles.mainBtnTest} onPress={this.realizarBusca}>
                <Text style={styles.mainBtnText}>OO</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.mainMenuInput} onPress={this.realizarBusca}>
                <Text style={styles.mainBtnText}>Para onde?</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
  mainMap: {
    flex: 0.89,
    width: 411,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
  },
  mainNav: {
    flex: 0.11,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainMenuNav: {
    width: 380,
    borderRadius: 5,
    backgroundColor: '#F3BC2C',
  },
  mainDiv: {
    width: 394,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainMenuInput: {
    width: 320,
    height: 45,
    paddingLeft: 23,
    paddingBottom: 2,
    fontSize: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    backgroundColor: '#ffffff',
  },
  mainBtnText: {
    marginTop: 12,
  }
});