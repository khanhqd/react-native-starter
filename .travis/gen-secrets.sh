# Pack files
FILES=(
    ".travis/id_rsa"
    "ios/STQ-Test/GoogleService-Info.plist"
    "android/keystores/release.keystore"
    "android/playstore.json"
    "android/app/google-services.json"
)

for file in "${FILES[@]}"
do
    if [ -f $file ]; then
        FILES_TO_ADD="$FILES_TO_ADD $file"
    fi
done

zip .travis/secrets.zip -r $FILES_TO_ADD
gpg -c .travis/secrets.zip
