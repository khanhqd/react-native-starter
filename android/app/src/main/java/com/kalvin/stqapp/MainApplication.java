package com.kalvin.stqapp;

import android.content.Context;
import android.support.multidex.MultiDex;

import com.reactnativenavigation.NavigationApplication;
import com.microsoft.codepush.react.CodePush;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import io.sentry.RNSentryPackage;
import com.cmcewen.blurview.BlurViewPackage;

import com.facebook.react.ReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
  // implements ReactInstanceHolder {

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }

    @Override
    public String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
          new CodePush(BuildConfig.ANDROID_CODEPUSH_DEPLOYMENT_KEY, MainApplication.this, BuildConfig.DEBUG),
          new ReactNativeConfigPackage(),
          new RNSentryPackage(MainApplication.this),
          new BlurViewPackage(),
          new RNFirebasePackage(),
          new RNFirebaseAnalyticsPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

    // @Override
    // public ReactInstanceManager getReactInstanceManager() {
    //     return getReactNativeHost().getReactInstanceManager();
    // }
}
