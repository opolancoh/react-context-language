import React from 'react';

import LanguageContext from '../../contexts/LanguageContext';

class Checkbox extends React.Component {
  static contextType = LanguageContext;

  componentDidMount() {
    const language = this.context;
    console.log(language);
  }

  render() {
    return (
      <div className='field'>
        <div className='ui checkbox'>
          <input type='checkbox' tabIndex='0' className='hidden'></input>
          <label>
            {this.context === 'english'
              ? 'I agree to the Terms and Conditions'
              : 'Estoy de acuerdo con los términos y condiciones'}
          </label>
        </div>
      </div>
    );
  }
}

export default Checkbox;
