import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {formatedFecha} from '../components/helpers/index';

export default function InformacionPaciente(props) {
  const {paciente, setPaciente, setModalPaciente} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Informacion {''}
        <Text style={styles.tituloBold}>Paciente</Text>
      </Text>
      <Pressable
        style={styles.btnCerrar}
        onPress={() => {
          setModalPaciente(false), setPaciente({});
        }}>
        <Text style={styles.textoCerrar}>Cerrar</Text>
      </Pressable>
      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.valor}> {paciente.paciente}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text> {paciente.propietario}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text> {paciente.email}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Telefono:</Text>
          <Text> {paciente.telefono}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Fecha Alta:</Text>
          <Text> {formatedFecha(paciente.fecha)}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas:</Text>
          <Text> {paciente.sintomas}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F59E8B',
    flex: 1,
  },

  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCerrar: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: '#E06900',
    padding: 20,
    borderRadius: 10,
  },
  textoCerrar: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
  },
  contenido: {
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontSize: 12,
    fontWeight: '700',
  },
  valor: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
});
