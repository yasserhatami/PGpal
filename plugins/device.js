/* eslint-disable */
import isMobile from '~/scripts/detectmobilebrowser';

export default function device({ req, app }, inject) {
  // Use user-agent for feature detection
  // So we can optimize server side rendering according to the exact device
  const ua = req ? req.headers['user-agent'] : navigator.userAgent;
  const uaindex = ua.indexOf( 'OS ' );

  const device = {
    apple: /iP(ad|od|hone)/ig.test(ua),
    appleVersion: parseInt(ua.substr( uaindex + 3, 3 ).replace( '_', '.' )),
    android: /Android/ig.test(ua),
    tablet: /Android|webOS|iPad|BlackBerry|IEMobile|Opera Mini/ig.test(ua),
    mobile: isMobile(ua)
  };

  device.type = device.mobile ? 'mobile' : (device.tablet ? 'tablet' : 'desktop');
  device.desktop = !(device.mobile || device.tablet);
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
  const isIOS = device.apple
  if (isIOS && !isInStandaloneMode()) {
    app.store.dispatch('showInstallMessage', true);
  } else {
    app.store.dispatch('showInstallMessage', false);
  }

  app.store.commit('SET_DEVICE', device);
  inject('device', device);
  function readDeviceOrientation() {
    if (Math.abs(window.orientation) === 90) {
      app.store.dispatch('setOrientation', false);
    } else {
      app.store.dispatch('setOrientation', true);
    }
  }
  window.onorientationchange = readDeviceOrientation;
  window.addEventListener('appinstalled', (evt) => {
    // Log install to analytics
    alert('INSTALL: Success');
  });
}

