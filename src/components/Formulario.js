import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';

export default function Formulario(props) {
  const {
    modalVisible,
    cerrarModal,
    setPacientes,
    pacientes,
    paciente: pacienteObj,
    setPaciente: setPacienteApp,
  } = props;

  const [paciente, setPaciente] = useState('');
  const [id, setId] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  useEffect(() => {
    if (Object.keys(pacienteObj).length > 0) {
      setPaciente(pacienteObj.paciente);
      setId(pacienteObj.id);
      setPropietario(pacienteObj.propietario);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setFecha(pacienteObj.fecha);
      setSintomas(pacienteObj.sintomas);
      console.log(pacienteObj);
    }
  }, [pacienteObj]);

  const handleCita = () => {
    //validar
    if ([paciente, propietario, email, sintomas, fecha].includes('')) {
      Alert.alert('Error: ', 'Todos los campos son obligatorios ');
      return;
    }

    const nuevoPaciente = {
      paciente,
      propietario,
      email,
      telefono,
      fecha,
      sintomas,
    };

    if (id) {
      nuevoPaciente.id = id;
      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState === nuevoPaciente.id ? nuevoPaciente : pacienteState,
      );
      console.log(pacientesActualizados);
    } else {
      //Nuevo registro
      nuevoPaciente.id = Date.now();
      setPacientes([...pacientes, nuevoPaciente]);
      setPacienteApp({});
    }
    cerrarModal();
    setId('');
    setPaciente('');
    setPropietario('');
    setEmail('');
    setTelefono('');
    setFecha(new Date());
    setSintomas('');
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Cita{' '}
            <Text style={styles.tituloBold}>
              {pacienteObj.id ? 'Editar' : 'Nueva'}
            </Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onPress={() => {
              cerrarModal();
              setId('');
              setPaciente('');
              setPropietario('');
              setEmail('');
              setTelefono('');
              setFecha(new Date());
              setSintomas('');
              setPacienteApp({});
            }}>
            <Text style={styles.textoCancelar}>X CANCELAR</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre del paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del paciente"
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre del Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del Propietario"
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email del Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email del Propietario"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Telefono del Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Telefono del Propietario"
              value={telefono}
              maxLength={10}
              onChangeText={setTelefono}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}> Fecha Alta</Text>
            <View style={styles.datePicker}>
              <DatePicker
                date={fecha}
                locale="es"
                mode="date"
                onChangeDate={date => setFecha(date)}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.sintomas]}
              placeholder="Sintomas"
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaText}>
              {pacienteObj.id ? 'Editar' : 'Agregar'} Paciente
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
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

  btnCancelar: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: '#5827A4',
    padding: 20,
    borderRadius: 10,
  },
  textoCancelar: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
  },

  campo: {
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 10,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sintomas: {
    height: 100,
  },
  datePicker: {
    backgroundColor: '#FFF',
    borderRadius: 20,
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 10,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaText: {
    textAlign: 'center',
    color: '#58274A',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
