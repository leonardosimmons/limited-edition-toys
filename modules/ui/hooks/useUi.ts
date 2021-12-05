import React from 'react';
import { QueryStatus } from 'react-query';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { setStatus, uiSelector } from 'src/redux/models/ui';

function useUi(status?: QueryStatus) {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (status) {
      switch (status) {
        case 'loading':
          dispatch(setStatus('loading'));
          break;
        case 'success':
          dispatch(setStatus('ready'));
          break;
        case 'idle':
          dispatch(setStatus('idle'));
          break;
        case 'error':
          dispatch(setStatus('error'));
          break;
        default:
          break;
      }
    }
  }, [status]);
}

export { useUi };
