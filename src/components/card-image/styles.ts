import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  icon: {
    width: 20,
    height: 20,
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: -5,
    marginHorizontal: -5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
  },
});

export default styles;
