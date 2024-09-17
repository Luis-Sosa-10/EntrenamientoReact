import React, {Component} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Globals from './Globals';

import {TextInput, View, Button, Text, TouchableOpacity,Image} from 'react-native';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    }

  render() {
    Globals.VistaActual = "Formulario";
    return <View style={{flex: 1}}><View>
    <TouchableOpacity
     style={{alignItems: 'center'}}
     onPress={() => { Globals.ocultarTap = false, this.props.navigation.navigate('Principal')}}
     >
      <Image
        source={require('./images/back.png')}
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Regresar
      </Text>
    </TouchableOpacity>
  </View>{this.forms()}</View>;
  }
  forms() {
    const SignupSchema = Yup.object().shape({
      email: Yup.string().email('Email invalido').required('Email requerido'),
    })
    return (
      <Formik
        initialValues={{email: '', text: ''}}
        validationSchema={SignupSchema}
        onSubmit={values => values.text = values.email}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Button onPress={handleSubmit} title="Submit" />
              <Text>El valor de Email es: {values.text}</Text>
               <Text style = {{color: 'red'}}> {errors.email}</Text>
          </View>
        )}
      </Formik>
    );
  }
}
export default Formulario;
