import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    width: '70%', // Define a largura como 70% da tela
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  header: {
    backgroundColor: '#6200ee',
  },
  title: {
    color: '#fff',
  },
});