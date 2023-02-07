import React from 'react'
// radio
import TestSingleRadio from './src/screens/radioScreen/TestSingleRadio';
import TestGroupRadio from './src/screens/radioScreen/TestGroupRadio';
// checkbox
import TestSingleCheckbox from './src/screens/checkboxScreen/TestSingleCheckbox';
import TestGroupCheckbox from './src/screens/checkboxScreen/TestGroupCheckbox';

const App = () => {
  return (
    <>
      <TestSingleRadio />
      <TestGroupRadio />
      {/* <TestSingleCheckbox />
      <TestGroupCheckbox /> */}
    </>
  )
}

export default App