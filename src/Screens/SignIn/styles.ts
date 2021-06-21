import { themes } from './../../global/styles/themes';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themes.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:20

    },
    image:{
      width: '100%',
      height: 360
    },
    content:{
      marginTop:-40,
    },
    title:{
      color: themes.colors.heading,
      textAlign:'center',
      fontSize:40,
      marginBottom:16
    },
    subtitle:{
      color: themes.colors.heading,
      fontSize:15,
      textAlign:'center',
      marginBottom:64
    },
  });

 