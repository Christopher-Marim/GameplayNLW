import { themes } from './../../global/styles/themes';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
   container:{
       width: '100%',
       height: 56,
       backgroundColor: themes.colors.primary,
       borderRadius:8,
       flexDirection:'row', 
       alignItems:'center',
        
   },
   title:{
       flex: 1,
       color: themes.colors.heading,
       fontSize:15,
       textAlign:'center'
   },
    iconWrapper:{
        width: 56,
        height: 56,
        justifyContent:'center',
        alignItems:'center',
         borderRightWidth:1, 
         borderRightColor: themes.colors.line
    },
     icon: {
         height: 18,
         width: 24
     }
  });

 