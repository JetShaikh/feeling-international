import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  SafeAreaView
} from 'react-native';
import { Dropdown } from '../components/Dropdown';
import { connect } from 'react-redux';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const languageOptions = [
  { text: 'English', img: require('../assets/images/american-flag.png') },
  { text: 'French', img: require('../assets/images/french-flag.png') },
  { text: 'Spanish', img: require('../assets/images/french-flag.png') },
  { text: 'Chinese', img: require('../assets/images/french-flag.png') }
];

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  selectLanguage(dropdown) {
    const { dispatch, languages } = this.props;

    return (index) => {
      const language = languageOptions.map(opt => opt.text)[index];
      dispatch({ type: 'SET_LANGUAGE', direction: dropdown, language });
      this.setState({ [`${dropdown}Open`]: false });
    };
  }

  render() {
    const { languages, navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>Feeling International</Text>
        </View>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
          <Text style={ styles.dropdownHeader }>From</Text>
          <Dropdown
            items={ languageOptions }
            select={ this.selectLanguage('from') }
            toggle={ () => {
              this.setState({ fromOpen: !this.state.fromOpen });
            } }
            isOpen={ this.state.fromOpen }
            selectedIndex={ languageOptions.map(opt => opt.text).indexOf(languages.from) }
          />

        <Text style={ styles.dropdownHeader }>To</Text>
          <Dropdown
            items={ languageOptions }
            select={ this.selectLanguage('to') }
            toggle={ () => {
              this.setState({ toOpen: !this.state.toOpen });
            } }
            isOpen={ this.state.toOpen }
            selectedIndex={ languageOptions.map(opt => opt.text).indexOf(languages.to) }
          />
        <TouchableHighlight style={ styles.button } onPress={ () => navigation.navigate('Input') }>
          <Text style={ styles.buttonText }>Go</Text>
        </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#1876D2',
  },
  scrollContainer: {
    padding: 15,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: '#1876D2',
    padding: 15,
    paddingTop: 50
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold'
  },
  dropdownHeader: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    marginTop: 10
  },
  button: {
    backgroundColor: '#004CA0',
    padding: 15,
    margin: 'auto',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 400,
    borderRadius: 8
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
});

const mapStateToProps = state => ({
  languages: state.languages
});

export default connect(mapStateToProps)(HomeScreen);
