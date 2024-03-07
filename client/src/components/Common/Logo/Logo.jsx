import { setEnvMode } from '@shared/utils/services';
import { useState } from 'react';
import { setAppName } from '../../../shared/utils/services';
// import logo from '@assets/common/logo.svg';
const Logo = () => {
  const { mode, bgColor } = setEnvMode();
  const [env] = useState({ mode, bgColor });

  const [appName] = useState(setAppName());

  return (
    <div>
      {/* <img src={logo} className="logo-img" alt="" /> */}
      <div className="app-name text-black text-2xl font-normal font-['Luminari']">
        {appName}
        {env.mode && env.bgColor && (
          <span
            className={`environment ml-3 align-top leading-4 text-white py-1 px-2 rounded-lg font-extrabold text-sm`}
            style={{ backgroundColor: env.bgColor }}
          >
            {env.mode}
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
