export const setEnvMode = () => {
  const env = process.env.NODE_ENV;
  const isBeta = process.env.IS_BETA;

  if (isBeta === 'true') {
    // Check for string 'true'
    return { mode: 'BETA', bgColor: 'bg-yellow-500' };
  } else if (env === 'development') {
    return { mode: 'DEV', bgColor: '#295576' };
  }
};

export const setAppName = () => {
  return process.env.APP_NAME.toUpperCase();
};
