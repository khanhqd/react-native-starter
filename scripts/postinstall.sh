# Add podspecs
git apply --directory=node_modules/react-native-navigation ./scripts/patches/react-native-navigation.patch
cp ./scripts/patches/react-native-webgl.podspec ./node_modules/react-native-webgl/.
# Generate dotenv
touch ./ios/Config/GeneratedInfoPlistDotEnv.h
sh ./scripts/dotenv.sh

# Pod install
(cd ios; pod install; cd -)
