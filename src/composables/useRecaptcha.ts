declare global {
  interface Window {
    grecaptcha: any;
  }
}

export const useRecaptcha = () => {
  const waitForGrecaptcha = () => {
    return new Promise<any>((resolve) => {
      const check = () => {
        if (window.grecaptcha?.enterprise) {
          resolve(window.grecaptcha);
        } else {
          setTimeout(check, 100);
        }
      };
      check();
    });
  };

  const executeRecaptcha = async (siteKey: string, action: string = 'submit') => {
    const grecaptcha = await waitForGrecaptcha();
    return grecaptcha.enterprise.execute(siteKey, { action });
  };

  return { executeRecaptcha };
};
