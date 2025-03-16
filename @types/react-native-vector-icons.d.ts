declare module 'react-native-vector-icons/MaterialIcons' {
    import { IconProps } from 'react-native-vector-icons/Icon';
    import { Component } from 'react';
  
    export default class Icon extends Component<IconProps> {}
  }
  
  declare module 'react-native-vector-icons' {
    export { default as MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
  }
  