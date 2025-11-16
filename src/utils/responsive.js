import { useState, useEffect } from 'react';

export const breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280
};

export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: windowSize.width < breakpoints.tablet,
    isTablet: windowSize.width >= breakpoints.tablet && windowSize.width < breakpoints.desktop,
    isDesktop: windowSize.width >= breakpoints.desktop,
    isWide: windowSize.width >= breakpoints.wide,
    isPortrait: windowSize.height > windowSize.width,
    isLandscape: windowSize.width > windowSize.height,
    breakpoint: 
      windowSize.width < breakpoints.mobile ? 'xs' :
      windowSize.width < breakpoints.tablet ? 'sm' :
      windowSize.width < breakpoints.desktop ? 'md' :
      windowSize.width < breakpoints.wide ? 'lg' : 'xl'
  };
};

export const getDeviceType = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (/android/i.test(userAgent)) return 'android';
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'ios';
  if (/Windows Phone/i.test(userAgent)) return 'windows-phone';
  if (/tablet/i.test(userAgent)) return 'tablet';
  if (/mobile/i.test(userAgent)) return 'mobile';
  
  return 'desktop';
};

export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const isPWA = () => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone ||
         document.referrer.includes('android-app://');
};
