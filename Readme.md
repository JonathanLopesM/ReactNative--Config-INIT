 # App configuration Init to NativeWind- TailwindCSS


 # Run svg on React-Native
 npx expo install react-native-svg

  # use svg on component
 yarn add react-native-svg-transformer -D

 
  # ReactNative--Config-INIT
# ReactNative--Config-INIT
# ReactNative--Config-INIT

# dependencias e verificar dados atualizados 
npx expo doctor



# build app to production
 # apk
eas build -p android --profile preview
  # store
  eas build --platform android

  # apple
  eas build --platform ios

  atualizar e build novamente:
    cd ios 
  seguindo de:
    pod update

# pdf viewer expo 
npx expo run:android
npx expo install expo-dev-client

# install packages
npx expo install react-native-pdf react-native-blob-util 
fbjs 
@config-plugins/react-native-blob-util 
@config-plugins/react-native-pdf

# config app.json
"plugins": [
      "@config-plugins/react-native-blob-util", 
      "@config-plugins/react-native-pdf"
    ],

# Version APP Android
  build.gradle
        versionCode 3
        versionName "2.0.3"

