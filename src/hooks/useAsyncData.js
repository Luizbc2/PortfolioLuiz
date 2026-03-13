import { useEffect, useState } from 'react';

export const useAsyncData = (loader, dependencies) => {
  const [state, setState] = useState({ data: null, error: null, isLoading: true });

  useEffect(() => {
    let mounted = true;
    setState((current) => ({ ...current, isLoading: true, error: null }));
    loader().then((data) => {
      if (mounted) setState({ data, error: null, isLoading: false });
    }).catch((error) => {
      if (mounted) setState({ data: null, error, isLoading: false });
    });
    return () => { mounted = false; };
  }, dependencies);

  return state;
};
