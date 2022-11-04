import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 10,
  },
  title:{
    textAlign: 'center',
  },
  section: {
    flex: 1,
    margin: 0,
  },
  itemSection: {
    width: 160,
    height: 200,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  itemSectionLarge: {
    width: 200,
    height: 160,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default styles;
