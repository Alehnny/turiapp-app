import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    alignItems: 'center',
  },
  imgAvatarContainer: {
    borderRadius: 180 / 2,
    overflow: 'hidden',
    borderColor: '#3366FF',
    borderWidth: 5,
    width: 180,
    height: 180,
    margin: 10,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  textCenter: {
    textAlign: 'center',
  }
});

export default styles;
