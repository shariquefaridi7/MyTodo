 import { StyleSheet } from "react-native";
 const COLORS = {primary: '#1f145c', white: '#fff'};
export const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: COLORS.white,
    },
    inputContainer: {
      height: 50,
      paddingHorizontal: 20,
      elevation: 40,
      backgroundColor: COLORS.white,
      flex: 1,
      marginVertical: 20,
      marginRight: 20,
      borderRadius: 30,
    },
    iconContainer: {
      height: 50,
      width: 50,
      backgroundColor: COLORS.primary,
      elevation: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    listItem: {
      padding: 20,
      backgroundColor: COLORS.white,
      flexDirection: 'row',
      elevation: 12,
      borderRadius: 7,
      marginVertical: 10,
    },
    actionIcon: {
      height: 25,
      width: 25,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      marginLeft: 5,
      borderRadius: 3,
    },
    header: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });