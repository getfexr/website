import Layout from '@theme/Layout';
import React, { useEffect } from 'react';

function LinkPage() {
  useEffect(() => {
    function runClientSideLogic() {
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

      // Ask the user's preference
      function askUserPreference() {
        const userChoice = window.confirm(
          'Open on Fexr app?. Cancel to continue on web',
        );

        if (userChoice) {
          const os = getMobileOperatingSystem();
          if (os === 'Android') {
            window.location = playStoreUrl;
          } else if (os === 'iOS') {
            window.location = appStoreUrl;
          }
        } else {
          // Open the web link
          window.location = `https://fexr.club/${clubId}`;
        }
      }

      function checkAppPresence() {
        const startTime = new Date().getTime();
        const timeout = setTimeout(() => {
          const endTime = new Date().getTime();
          if (endTime - startTime < 1500) {
            // App not detected, ask user's preference
            askUserPreference();
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
    }

    if (typeof window !== 'undefined') {
      runClientSideLogic();
    }
  }, []);

  return (
    <Layout>
      <div className="grid h-min-screen place-items-center py-10">
        <div>Redirecting...</div>
      </div>
    </Layout>
  );
}

export default LinkPage;
