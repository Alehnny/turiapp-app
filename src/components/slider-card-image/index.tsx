import CardImage from '@components/card-image';
import {Layout, ViewPager} from '@ui-kitten/components';
import React, {FC} from 'react';
import {ISliderCardImage} from './interfaces';
import styles from './styles';

const SliderCardImage: FC<ISliderCardImage> = ({pages}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      {pages.map((item, index) => {
        return (
          <Layout style={styles.tab} key={index}>
            <CardImage {...item} />
          </Layout>
        );
      })}
    </ViewPager>
  );
};

export default SliderCardImage;
