import React, {Component} from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import Boton from './Boton';
import Selector from './Selector';
import Globals from '../Globals';

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ValorActual: '',
      Valor1: '',
      Valor2: '',
      Operacion: 'Suma',
      Resultado: '',
      showOperacionList: false,
      Operaciones: [
        {Operacion: 'Suma'},
        {Operacion: 'Resta'},
        {Operacion: 'Multiplicacion'},
        {Operacion: 'Division'},
      ],
    };
  }
  componentDidMount() {
  }

  render() {
    Globals.VistaActual = "Calculadora";
    return (
      <View>
        <TouchableOpacity
          style={{alignItems: 'left'}}
          onPress={() => { Globals.ocultarTap = false,
            this.props.navigation.navigate('Principal');
          }}>
          <Image
            source={require('../images/back.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10
            }}
          />
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'left',
            }}>
            Regresar
          </Text>
        </TouchableOpacity>
        <View>
          <View style={{alignItems: 'flex-end'}}>
            <TextInput
              style={{
                fontSize: 15,
                borderWidth: 3,
                marginTop: 0,
                marginLeft: 20,
                marginRight: 20,
                color: 'black',
                textAlign: 'right',
                paddingRight: 20,
                width: 180,
                height: 38,
              }}
              editable={false}>
              {this.state.Valor1}
            </TextInput>
          </View>
          <TextInput
            style={{
              fontSize: 20,
              borderWidth: 5,
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
              color: 'black',
              textAlign: 'right',
              paddingRight: 20,
              height: 45,
            }}
            editable={false}>
            {this.state.ValorActual}
          </TextInput>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            <Boton Valor={6} Accion={() => this.EscribirValor(6)} />
            <Boton Valor={7} Accion={() => this.EscribirValor(7)} />
            <Boton Valor={8} Accion={() => this.EscribirValor(8)} />
            <Boton Valor={9} Accion={() => this.EscribirValor(9)} />
            <Boton Valor={2} Accion={() => this.EscribirValor(2)} />
            <Boton Valor={3} Accion={() => this.EscribirValor(3)} />
            <Boton Valor={4} Accion={() => this.EscribirValor(4)} />
            <Boton Valor={5} Accion={() => this.EscribirValor(5)} />
            <Boton Valor={0} Accion={() => this.EscribirValor(0)} />
            <Boton Valor={1} Accion={() => this.EscribirValor(1)} />
            <Boton Valor={'C'} Accion={() => this.Limpiar()} />
            <Boton Valor={'↵'} Accion={() => this.CambiarValor2()} />
            <Selector Accion={this.EstablecerOperacion} />
            <Boton Valor={'='} Accion={() => this.CalcularOperacion()} />
            <Text
              style={{
                fontSize: 20,
                marginTop: 10,
                marginLeft: 15,
                marginRight: 15,
                color: 'black',
                textAlign: 'left',
                paddingRight: 20,
                width: 190,
                height: 80,
                paddingTop: 20,
              }}
              editable={false}>
              Resultado: {this.state.Resultado}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  EscribirValor(Valor) {
    this.setState({ValorActual: this.state.ValorActual + Valor});
  }
  CambiarValor2() {
    if (this.state.ValorActual != '') {
      this.setState({Valor1: this.state.ValorActual, ValorActual: ''});
    }
  }
  CalcularOperacion() {
    if (this.state.ValorActual != '' && this.state.Valor1 != '') {
      var resultado;
      switch (this.state.Operacion) {
        case 'Suma':
          resultado =
            parseInt(this.state.Valor1) + parseInt(this.state.ValorActual);
          break;
        case 'Resta':
          resultado =
            parseInt(this.state.Valor1) - parseInt(this.state.ValorActual);
          break;
        case 'Multiplicacion':
          resultado =
            parseInt(this.state.Valor1) * parseInt(this.state.ValorActual);
          break;
        case 'Division':
          resultado =
            parseInt(this.state.Valor1) / parseInt(this.state.ValorActual);
          break;
      }
      this.setState({Resultado: resultado, ValorActual: '', Valor1: ''});
    }
  }

  EstablecerOperacion = Oper => {
    this.setState({Operacion: Oper});
  };
  Limpiar() {
    this.setState({Valor1: '', ValorActual: '', Resultado: ''});
  }
}
export default Calculadora;
