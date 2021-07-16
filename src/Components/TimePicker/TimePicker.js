import * as React from 'react';
import List from 'Components/List/List';
import Input from 'Components/Input/Input';
import Wrapper from 'Components/Wrapper/Wrapper';
import { DEFAULT_SETTINGS } from 'utils/defaults';
import { _formatValue, parseSettings } from 'utils/main';
import './timepicker.css';

const initialState = DEFAULT_SETTINGS;
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'init':
      return { settings: { ...state.settings, ...payload } };
    default:
      throw new Error();
  }
};


const TimePicker = props => {
  const { onChange = () => {}, value = null } = props;
  const [{ settings }, dispatch] = React.useReducer(reducer, initialState);

  const [timeValue, setTimeValue] = React.useState(value);
  const [open, setOpen] = React.useState(false);
  const [showErr, setShowErr] = React.useState(false);
  const [err, setErr] = React.useState({});

  React.useEffect(() => {
    dispatch({ type: 'init', payload: parseSettings(DEFAULT_SETTINGS) });
  }, []);

  React.useEffect(() => {
    if (!timeValue && !open) {
      setErr({});
      setShowErr(false);
    } else if (timeValue && !open && Object.values(err).length) {
      setShowErr(true);
    }
  }, [timeValue, open]);

  const handleMaskClick = () => {
    setOpen(false);
    formatTimeValue(timeValue);
  };

  const formatTimeValue = value => {
    const { timeValue, errors } = _formatValue(value, DEFAULT_SETTINGS, {});
    setErr(errors);
    // eslint-disable-next-line no-negated-condition
    !timeValue ? handleSettingTime(null) : handleSettingTime(timeValue);
  };

  const handleSettingTime = value => {
    onChange(value);
    setTimeValue(value);
  };

  return (
    <div>
      <Input
        open={open}
        value={timeValue}
        setTimeValue={setTimeValue}
        setOpen={setOpen}
        showErr={showErr}
        setShowErr={setShowErr}
        setErr={setErr}
        err={err}
        formatTimeValue={formatTimeValue}
        />
      <div className={`ui-list-mask ${open ? 'visible' : ''}`} onClick={handleMaskClick}></div>
      {open && <Wrapper>
        <List
          setTimeValue={setTimeValue}
          timeValue={timeValue}
          settings={settings}/>
      </Wrapper>}
    </div>
  );
};

export default TimePicker;
