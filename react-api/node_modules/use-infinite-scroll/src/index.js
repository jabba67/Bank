import { useState, useEffect } from 'react';

const useInfiniteScroll = (fetchCallback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching) return;
    fetchCallback();
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const offsetHeight = document.documentElement.offsetHeight
    const innerHeight = window.innerHeight
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    if (isFetching || innerHeight + scrollTop !== offsetHeight)
      return;

    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
}

export default useInfiniteScroll;
