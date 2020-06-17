import 'rc-time-picker/assets/index.css';

import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

export default class SomeComponent extends React.Component {
    

  render() {
      return (
          <div style={{display: 'block', width: '8vw', marginLeft: '40vw'}}>
        <TimePicker defaultValue={moment()} showSecond={false} minuteStep={10} />
          </div>
    
      );
  }
}