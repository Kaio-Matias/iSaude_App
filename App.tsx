import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{/* Tela de Carregamento*/}
import SplashScreen from './screens/SplashScreen';


{/* Tela Inicial*/}
import HomeScreen from './screens/HomeScreen';

{/* Tela de Registro*/}
import RegisterScreen from './screens/RegisterScreen';
import ConnectTypeScreen from './screens/ConnectTypeScreen';

{/* Cadastro de Pacientes*/}
import PersonalInformationFormPacient from './screens/Register/pacient/PersonalInformationForm';
import BasicInformationFormPacient from './screens/Register/pacient/BasicInformationForm';
import UserInformationFormPacient from './screens/Register/pacient/UserInformationForm';
import PasswordInformationFormPacient from './screens/Register/pacient/PasswordInformationForm';
import ConfirmedRegisterPacient from './screens/Register/pacient/ConfirmedRegister';

{/* Cadastro de Profissionais*/}
import PersonalInformationFormProfessional from './screens/Register/professional/PersonalInformationForm';
import BasicInformationFormProfessional from './screens/Register/professional/BasicInformationForm';
import UserInformationFormProfessional from './screens/Register/professional/UserInformationForm';
import ProfessionalInformationFormProfessional from './screens/Register/professional/ProfessionalInformationForm';
import PasswordInformationFormProfessional from './screens/Register/professional/PasswordInformationForm';
import ConfirmedRegisterProfessional from './screens/Register/professional/ConfirmedRegister';

{/* Cadastro de Clínicas*/}
import PersonalInformationFormClinic from './screens/Register/clinic/PersonalInformationForm';
import BasicInformationFormClinic from './screens/Register/clinic/BasicInformationForm';
import UnityInformationFormClinic from './screens/Register/clinic/UnityInformationForm';
import PasswordInformationFormClinic from './screens/Register/clinic/PasswordInformationForm';
import InstitutionalInformationFormClinic from './screens/Register/clinic/InstitutionalInformationForm';
import ConfirmedRegisterClinic from './screens/Register/clinic/ConfirmedRegister';

{/* Troca de Senha*/}
import ForgotPasswordScreen from './screens/Password/ForgotPasswordScreen';
import NovaSenhaScreen from './screens/NovaSenhaScreen';
import SenhaAlteradaScreen from './screens/SenhaAlteradaScreen';

import Terms from './screens/Terms-Polity/Terms';
import Polity from './screens/Terms-Polity/Polity';

import './global.css';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ConnectType" component={ConnectTypeScreen} />
        <Stack.Screen name="NovaSenha" component={NovaSenhaScreen} />
        <Stack.Screen name="SenhaAlterada" component={SenhaAlteradaScreen} />

        {/* Cadastro de Pacientes*/}
        <Stack.Screen name="PersonalInformationFormPacient" component={PersonalInformationFormPacient} />
        <Stack.Screen name="BasicInformationFormPacient" component={BasicInformationFormPacient} />
        <Stack.Screen name="UserInformationFormPacient" component={UserInformationFormPacient} />
        <Stack.Screen name="PasswordInformationFormPacient" component={PasswordInformationFormPacient} />
        <Stack.Screen name="ConfirmRegisterPacient" component={ConfirmedRegisterPacient} />

         {/* Cadastro de Profissionais*/}
        <Stack.Screen name="PersonalInformationFormProfessional" component={PersonalInformationFormProfessional} />
        <Stack.Screen name="BasicInformationFormProfessional" component={BasicInformationFormProfessional} />
        <Stack.Screen name="UserInformationFormProfessional" component={UserInformationFormProfessional} />
        <Stack.Screen name="PasswordInformationFormProfessional" component={PasswordInformationFormProfessional}/>
        <Stack.Screen name="ProfessionalInformationFormProfessional" component={ProfessionalInformationFormProfessional}/>
        <Stack.Screen name="ConfirmRegisterProfessional" component={ConfirmedRegisterProfessional} />

        {/* Cadastro de Clinícas*/}
        <Stack.Screen name="PersonalInformationFormClinic" component={PersonalInformationFormClinic} />
        <Stack.Screen name="BasicInformationFormClinic" component={BasicInformationFormClinic} />
        <Stack.Screen name="InstitutionalInformationFormClinic" component={InstitutionalInformationFormClinic}/>
        <Stack.Screen name="UnityInformationFormClinic" component={UnityInformationFormClinic} />
        <Stack.Screen name="PasswordInformationFormClinic" component={PasswordInformationFormClinic}/>
        <Stack.Screen name="ConfirmRegisterClinic" component={ConfirmedRegisterClinic} />


        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Polity" component={Polity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
