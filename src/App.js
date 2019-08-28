import React, { useState } from 'react';

import LanguageContext from './contexts/LanguageContext';
import CreateUser from './components/CreateUser';

function App() {
  const [language, setLanguage] = useState('english');

  const onLanguageChange = lang => {
    console.log(lang);
    setLanguage(lang);
  };

  return (
    <div className='ui container'>
      <div>Current language: {language}</div>
      <div className='ui basic buttons'>
        <div className='ui button' onClick={() => onLanguageChange('english')}>
          <i className='flag us'></i>
        </div>
        <div className='ui button' onClick={() => onLanguageChange('spanish')}>
          <i className='flag co'></i>
        </div>
      </div>
      <br />
      <br />
      <LanguageContext.Provider value={language}>
        <CreateUser />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
