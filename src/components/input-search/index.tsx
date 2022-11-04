import IconSVG from '@icons/index';
import {Input} from '@ui-kitten/components';
import React, {useState} from 'react';
import styles from './styles';

const InputSearch = () => {
  const [value, setValue] = useState<string>('');

  return (
    <Input
      style={styles.input}
      value={value}
      label=""
      placeholder="Busca nuevos lugares"
      accessoryRight={styles => IconSVG(styles, 'search-outline')}
      onChangeText={nextValue => setValue(nextValue)}
    />
  );
};

export default InputSearch;
