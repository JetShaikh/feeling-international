import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

export const InputScreen = (props) => {
  const { languages, text, dispatch, navigation } = props;

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.wrapper }>
        <Text style={ styles.languageHeader }>{ languages.from } to { languages.to }</Text>
        <View style={{ borderColor: 'black', border: 1 }}>
          <TextInput
            value={ text }
            style={ styles.textArea }
            onChangeText={ (newText) => dispatch({ type: 'SET_TEXT', text: newText }) }
            multiline={ true }
          />
        </View>
        <TouchableHighlight style={ styles.button } onPress={ () => navigation.navigate('Result') }>
          <Text style={{ color: 'white', textAlign: 'center' }}>Translate</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  languageHeader: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
    flex: 1
  },
  wrapper: {
    paddingTop: 50,
    marginLeft: 30,
    marginRight: 30
  },
  textArea: {
    height: 300,
    fontWeight: 'bold',
    fontSize: 26,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    marginTop: 30,
    marginBottom: 30
  },
  button: {
    position: 'absolute',
    backgroundColor: '#004CA0',
    padding: 15,
    margin: 'auto',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 300,
    borderRadius: 8
  },
});

const mapStateToProps = state => ({
  languages: state.languages,
  text: state.text
});

export default connect(mapStateToProps)(InputScreen);
