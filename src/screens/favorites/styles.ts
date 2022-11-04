import {StyleSheet} from 'react-native';

const maginTopButtom = {
  marginTop: 10,
  marginBottom: 10,
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
  },
  subTitle: {
    ...maginTopButtom,
    textAlign: 'center',
  },
  subTitleRecommended: {
    ...maginTopButtom,
  },
  containerButtoms: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  tynyButtom: {
    marginHorizontal: 5,
    marginVertical: 2,
  },
  tab: {
    justifyContent: 'center',
  },
});

export default styles;
