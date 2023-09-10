const baseAppUrl = 'fexr://';
const appStoreUrl = 'https://apps.apple.com/vn/app/fexr-wallet/id1631128786';
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.getfexr.core';

const urlParams = new URLSearchParams(window.location.search);
const userStatus = urlParams.get('userStatus');
const clubId = urlParams.get('clubId');
const callbackUrl = urlParams.get('callback');

function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) return 'Android';
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'iOS';
  return 'unknown';
}

function openApp() {
  window.location = `${baseAppUrl}?userStatus=${userStatus}&clubId=${clubId}`;
}

function openAppStore() {
  window.location = appStoreUrl;
}

function openPlayStore() {
  window.location = playStoreUrl;
}

function checkAppPresence() {
  const startTime = new Date().getTime();
  const timeout = setTimeout(() => {
    const endTime = new Date().getTime();
    if (endTime - startTime < 1500) {
      const os = getMobileOperatingSystem();
      if (os === 'Android') openPlayStore();
      else if (os === 'iOS') openAppStore();
    }
  }, 1000);

  window.addEventListener('pagehide', () => clearTimeout(timeout));
  openApp();
}

function postData() {
  if (callbackUrl) {
    fetch(callbackUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userStatus, clubId }),
    });
  }
}

postData();
checkAppPresence();
