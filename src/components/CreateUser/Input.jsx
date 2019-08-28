import React from 'react';

import LanguageContext from '../../contexts/LanguageContext';

class Input extends React.Component {
  render() {
    return (
      <div className='field'>
        <label>
          <LanguageContext.Consumer>
            {language => (language === 'english' ? 'Name' : 'Nombre')}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Input;
