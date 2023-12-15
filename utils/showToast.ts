'use client';

import {Toast} from '@douyinfe/semi-ui';

/**
 *
 * @param message
 * @param duration
 */
export const showToastSuccess = (message: String, duration: any) => {
  Toast.success({
    content: message,
    duration: duration,
  });
};

/**
 *
 * @param message
 * @param duration
 */
export const showToastFail = (message: String, duration: any) => {
  Toast.error({
    content: message,
    duration: duration,
  });
  setTimeout(() => {
    Toast.destroyAll();
  }, 3000);
};

/**
 *
 * @param message
 * @param duration
 */
export const showToastDevelopment = () => {
  Toast.info({
    content: 'Features are still under development, please wait patiently !',
    duration: 3000,
  });
  setTimeout(() => {
    Toast.destroyAll();
  }, 3000);
};
