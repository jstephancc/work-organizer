App.info({
  id: 'com.work.organizer',
  name: 'Work Organizer',
  version: "0.0.1",
  description: 'Lets design your day!',
  author: 'Jakub Stephan',
  email: 'j.stephan@cctechnology.pl',
  website: 'http://www.speedway-world.pl'
});

App.icons({
  // Android
  'android_mdpi': 'resources/icons/icon-48x48.png',
  'android_hdpi': 'resources/icons/icon-72x72.png',
  'android_xhdpi': 'resources/icons/icon-96x96.png',
  'android_xxhdpi': 'resources/icons/icon-144x144.png',
  'android_xxxhdpi': 'resources/icons/icon-192x192.png'
});

App.launchScreens({
  // Android
  'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
  'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
  'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
  'android_xxhdpi_portrait': 'resources/splash/splash-1080x1440.png'
});
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#262626');
App.setPreference("orientation", "portrait");
