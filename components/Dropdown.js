import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';

const itemContent = item => (
  <View style={ styles.item }>
    <View style={ styles.flagContainer }>
      { item.img
        ? <Image
          source={ item.img }
          style={ styles.flag }
        />
        : null
      }
    </View>
    <View style={ styles.textContent }>
      <Text style={ styles.textDescription }>Select Language</Text>
      <Text style={ styles.languageText }>{ item.text }</Text>
    </View>
    <View style={ styles.carrotIcon }>
      <Image
        source={ require('../assets/images/carrot.png') }
        style={ styles.carrotIconImage }
      />
    </View>
  </View>
);

export const Dropdown = (props) => {
  const { items, selectedIndex, select, toggle, isOpen } = props;
  const selected = items[selectedIndex];

  return (
    <View>
      <TouchableHighlight style={ styles.title } onPress={ toggle }>
        { itemContent(selected) }
      </TouchableHighlight>
      {
        isOpen
          ? items.map((item, index) => (
            <TouchableHighlight key={ index } onPress={ () => select(index) }>
              { itemContent(item) }
            </TouchableHighlight>
          ))
          : null
      }
    </View>
  );
}

Dropdown.defaultProps = {
  selectedIndex: 0
};

const styles = StyleSheet.create({
  title: {
    borderRadius: 1,
    borderColor: '#000000'
  },
  titleText: {
    fontSize: 20
  },
  item: {
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  flag: {
    width: 32,
    height: 23,
  },
  flagContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10
  },
  textContent: {
    display: 'flex',
    flex: 4
  },
  carrotIcon: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  languageText: {
    // fontWeight: 'bold',
    fontSize: 22
  },
  textDescription: {
    fontSize: 16,
    color: '#757575'
  }
});
export default Dropdown;
