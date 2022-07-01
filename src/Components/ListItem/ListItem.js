import * as React from 'react';
import { classNames } from 'utils/constants';

const ListItem = ({
  children,
  idx,
  label,
  meridiemClass,
  optionIdx,
  roundedValue,
  setTimeValue,
  setOptionIdx,
  value,
  focus,
  setFocus,
}, ref) => {
  const [selected, setSelected] = React.useState('');

  React.useEffect(() => {
    if (focus && optionIdx === idx) {
      ref.current.focus();
      setFocus(false);
    }
  }, [focus, optionIdx, idx]);

  React.useEffect(() => {
    console.log('am I getting changes listItem 1.js');
    if (roundedValue === value) {
      setSelected(classNames.selected);
      setTimeout(() => {
         ref?.current?.scrollIntoView();
      }, 0);
    } else {
      setSelected('');
    }
  }, [roundedValue, value]);

  React.useEffect(() => {
    console.log('am I getting changes listItem 2.js');
    if (optionIdx === idx) {
      setSelected(classNames.selected);
      ref?.current?.scrollIntoView();
    } else {
      setSelected('');
    }
  }, [optionIdx, idx]);

  const handleClick = () => {
    setTimeValue(label);
    setOptionIdx(idx);
  };

  return (
    <li
      ref={ref}
      className={`${meridiemClass} ${selected}`}
      onClick={handleClick}
      tabIndex="-1"
      role="option"
    >
      {children}
    </li>
  );
};

export default React.forwardRef(ListItem);
