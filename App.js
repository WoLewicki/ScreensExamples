import React from 'react';
// import Test2 from './Test2';
// import TestTabNav from './TestTabNav';
// import TestGestureEnabled from './TestGestureEnabled';
// import TestPolish from './TestPolish';
// import TestNavigating from './TestNavigating';
// import TestBlinking from './TestBlinking';
// import TestUserInteraction from './TestUserInteraction';
// import TestBackButton from './TestBackButton';
// import TestBlankPage from './TestBlankPage';
// import TestJumpyHeader from './TestJumpyHeader';
// import TestRefreshControl from './TestRefreshControl';
// import TestModalRising from './TestModalRising';
// import TestRTL from './TestRTL';
// import TestWebView from './TestWebView';
// import TestReplaceAnimation from './TestReplaceAnimation';
import TestPureScreens from './TestPureScreens';
// import TestEvents from './TestEvents';
// import TestScrollView from './TestScrollView';
// import TestMomentum from './TestMomentum';
// import TestScrollViewAndTabs from './TestScrollViewAndTabs';
// import TestInverted from './TestInverted';
// import TestFromGH from './TestFromGH';
// import TestInset from './TestInset';
// import TestSimpleModal from './TestSimpleModal';
// import TestCustomAnimation from './TestCustomAnimation';
// import TestBottomInModal from './TestBottomInModal';
// import TestRNModal from './TestRNModal';
// import TestLoaderInModal from './TestLoaderInModal';
// import TestBottomHeader from './TestBottomHeader';
// import TestTransparent from './TestTransparent';
// import TestScrollViewInModal from './TestScrollViewInModal';
// import TestStatusBar from './TestStatusBar';
import TestSimpleStack from './TestSimpleStack';
import TestSimpleNativeStack from './TestSimpleNativeStack';
// import TestJumpyModal from './TestJumpyModal';
// import TestBottomInNative from './TestBottomInNative';
// import TestAppearance from './TestAppearance';
// import TestSearchBar from './TestSearchBar';
// import TestAuth from './TestAuth';
// import TestModalInBottom from './TestModalInBottom';

import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

enableScreens();

export default () => {
  return (
    <SafeAreaProvider>
      <TestSimpleStack />
    </SafeAreaProvider>
  );
};