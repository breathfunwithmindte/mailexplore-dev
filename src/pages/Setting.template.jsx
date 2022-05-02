import React from 'react';
import NavigationSetting from "../components/NavigationSetting";
import SettingPageBreadcrumbs from '../components/SettingPageBreadcrumbs';

const SettingTemplate = ({children}) => {



  return (
      <div className='App-page-wrapper'>
        <NavigationSetting />
        <div className='default-page'>
          <div className='settings-page-wrapper'>
            <SettingPageBreadcrumbs />
            <div className='settings-page-in'>
              {children}
            </div>
            <footer style={{height: "100px", padding: "var(--p)", display: "flex", flexDirection: "column"}}>
              <strong style={{color: "var(--clr1)"}}>Copy rights 2022 - All right reserved </strong>
              <em>Mike Karypidis</em>
            </footer>
          </div>
        </div>
      </div>
  );
}

export default SettingTemplate;
