import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

const languageCodes = {
  English: 'en',
  French: 'fr',
  Spanish: 'es',
  Chinese: 'zh-CN'
};

// I couldn't share our Google API key, which would be a security concern, as it would
// allow other devs who access this open repository to take the key and use
// the Google services (some of them paid) under our name!
// To get the translation to work, you'll want to set up a Google Developer account,
// and get a key for the Google Translate API.
// It will look something like: AIfeSsGeUAaiElFNTifvjrlq_qcd7EncOPequ3nl
const googleKey = 'YOUR GOOGLE API KEY HERE';

class ResultScreen extends React.Component {
  constructor(props) {
    super(props);
      this.state = { result: '' };
  }

  componentDidMount() {
    const { text, languages } = this.props;
    const endpoint = 'https://translation.googleapis.com/language/translate/v2?'
      .concat(`q=${text}&`)
      .concat(`target=${languageCodes[languages.to]}&`)
      .concat(`source=${languageCodes[languages.from]}&`)
      .concat('format=text&')
      .concat(`key=${googleKey}`);

    axios.post(endpoint).then(res => {
      if (res.data && res.data.data && res.data.data.translations) {
        const translations = res.data.data.translations
        this.setState({ result: translations[0].translatedText });
      }
    }).catch(err => {
      console.error('ERROR', err.response);
    });
  }

  render () {
    const { languages, text } = this.props;
    const { result } = this.state;

    return (
      <View>
        <Text>{ result }</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  languages: state.languages,
  text: state.text
});

export default connect(mapStateToProps)(ResultScreen);
