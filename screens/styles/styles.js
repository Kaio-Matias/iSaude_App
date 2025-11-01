import { StyleSheet } from 'react-native';

export const colors = {
    principalColor: '#4576F2',
}

export const fontes = {
    InteloBold: 'Intelo Bold', 
}

export const style = StyleSheet.create({
    main: {
        height: '100%',
        width: '100%',
        fontFamily:fontes.InteloBold
    },

    mainText: {
        color: 'black',
        fontFamily: fontes.InteloBold,
    },

    loading: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.principalColor,
        alignItems: 'center',
        justifyContent: 'center',
    },

    CentralizarItems: (posiçaoY,posicaoX) => {
        return {
             display:'flex',
            alignItems:posiçaoY,
            justifyContent:posicaoX,
        };
    },

    FormatarTexto: (fontsz,bold,textColor) => {
        return {
        fontSize: fontsz, 
        fontWeight: bold,
        color:textColor,
        }
    }
});
