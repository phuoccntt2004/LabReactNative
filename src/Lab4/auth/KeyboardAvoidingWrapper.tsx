import React, { ReactNode } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from 'react-native';
import COLORS from '../../assets/Colors';

interface KeyboardAvoidingViewWrapperProps {
  children: ReactNode;
}

const KeyboardAvoidingViewWrapper: React.FC<KeyboardAvoidingViewWrapperProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: COLORS.HEX_BLACK }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default KeyboardAvoidingViewWrapper;
