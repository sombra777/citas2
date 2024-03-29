import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {formatedFecha} from '../components/helpers/index';

export default function Paciente({
  item,
  setModalVisible,
  pacienteEditar,
  pacienteEliminar,
  setModalPaciente,
  setPaciente,
}) {
  const {paciente, fecha, id} = item;

  return (
    <Pressable
      onPress={() => {
        setModalPaciente(true);
        setPaciente(item);
      }}>
      <View style={styles.contenedor}>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.texto}>{paciente}</Text>
        <Text style={styles.fecha}>{formatedFecha(fecha)}</Text>
        <View style={styles.contenedorBotones}>
          <Pressable style={[styles.btn, styles.btnEditar]}>
            <Text
              style={styles.btnTexto}
              onLongPress={() => {
                setModalVisible(true);
                pacienteEditar(id);
              }}>
              Editar
            </Text>
          </Pressable>
          <Pressable
            style={[styles.btn, styles.btnEliminar]}
            onLongPress={() => {
              pacienteEliminar(id);
            }}>
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '94a3B8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  texto: {
    color: '#6D28D9',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '700',
  },
  fecha: {
    color: '#374151',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: '#F59E0B',
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFFF',
  },
});
