import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  col: {
    width: '50%',
  },
  icon: {
    width: 20,
    height: 20,
  },
  itemSectionLarge: {
    width: 200,
    height: 160,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  section: {
    padding: 10,
  },
  moreInfoTitle: {
    paddingBottom: 5,
  },
  listText: {
    marginLeft: 10,
    marginVertical: 2,
  },
  containerList: {
    marginVertical: 10,
  },
});

export default styles;
