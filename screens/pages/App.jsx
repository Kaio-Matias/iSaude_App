import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, View } from 'react-native';

// Telas 
import Loading from './Loading';
import Localization from './Localization';
import Contact from './Contacts';
import ProfileForFollow from './ProfileForFollow';
import Pulses from './Pulses';
import UserProfileExample from './UserProfileExample';
import { BottomNav } from '../BottomNav';
import { FeedProvider } from '../components/FeedContext';
import { UserBlockProvider } from '../components/UserBlockContext';
import { BlockedUsersProvider } from '../contexts/BlockedUsersContext';
import { StoryViewerProvider } from '../contexts/StoryViewerContext';
import { Chat } from './Chat';
import UserProfile from './UserProfile';
import ProfessionalProfile from './ProfessionalProfile';
import AboutAccount from './AboutAccount';
import ProfileOptions from './ProfileOptions';
import MyProfile from './MyProfile';
import EditProfile from './EditProfile';
import ProfileType from './ProfileType';
import EditUsername from './EditUsername';
import EditBio from './EditBio';
import BlockedProfile from '../components/BlockedProfile';
import CreatePost from './CreatePost';
import CreateFlash from './CreateFlash';
import PersonalInfo from './PersonalInfo';

// Health Pages
import SearchAppointments from './Health/SearchAppointments';
import SpecialtyDoctors from './Health/SpecialtyDoctors';
import LocationSelector from './Health/LocationSelector';
import ServiceHistory from './Health/ServiceHistory';
import CompletedAppointment from './Health/CompletedAppointment';
import AppointmentOptions from './Health/AppointmentOptions';
import ScheduleReturn from './Health/ScheduleReturn';
import Prescriptions from './Health/Prescriptions';
import ExamResults from './Health/ExamResults';
import UploadExam from './Health/UploadExam';
import HealthInfo from './Health/HealthInfo';
import PreConsultationQuestions from './Health/PreConsultationQuestions';
import SelectDateTime from './Health/SelectDateTime';
import AppointmentConfirmed from './Health/AppointmentConfirmed';
import PlaceholderScreen from '../components/HealthComponents/PlaceholderScreen';
import MyPhones from './MyPhones';
import PhoneDetails from './PhoneDetails';
import PhoneVerification from './PhoneVerification';
import VerificationSuccess from './VerificationSuccess';
import MyAddresses from './MyAddresses';
import AddAddress from './AddAddress';
import MapSearch from './MapSearch';
import AddressForm from './AddressForm';
import EditAddress from './EditAddress';
import MyCards from './MyCards';
import AddCard from './AddCard';
import AccountPrivacy from './AccountPrivacy';
import NotificationSettings from './NotificationSettings';
import AppPermissions from './AppPermissions';
import PermissionDetail from './PermissionDetail';
import AccountHistory from './AccountHistory';
import MyLikes from './MyLikes';
import Saved from './Saved';
import Accessibility from './Accessibility';
import SaturationSettings from './SaturationSettings';
import ColorblindFilter from './ColorblindFilter';
import ZoomSettings from './ZoomSettings';
import DyslexiaSettings from './DyslexiaSettings';
import AnimationSettings from './AnimationSettings';
import TalkbackSettings from './TalkbackSettings';
import AddPhone from './AddPhone';
import Notifications from './Notifications';

const Stack = createStackNavigator();



export default function App() {
  return (
    <StoryViewerProvider>
      <BlockedUsersProvider>
        <UserBlockProvider>
          <FeedProvider>
            <NavigationContainer>
          <Stack.Navigator initialRouteName="Loading">
            <Stack.Screen
              name="Loading"
              component={Loading}
              options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
              name="Localization"
              component={Localization}
              options={{
                title: 'Localização',
                headerLeft: () => null,
                headerShown: true,
                gestureEnabled: false
              }}
            />
            <Stack.Screen
              name="Contacts"
              component={Contact}
              options={{
                title: 'Contatos',
                headerLeft: () => null,
                headerShown: true,
                gestureEnabled: false
              }}
            />
            <Stack.Screen
              name="ProfileForFollow"
              component={ProfileForFollow}
              options={{
                title: 'Perfis para seguir',
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfile}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="ProfessionalProfile"
              component={ProfessionalProfile}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="AboutAccount"
              component={AboutAccount}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
                         <Stack.Screen
               name="ProfileOptions"
               component={ProfileOptions}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="MyProfile"
               component={MyProfile}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="EditProfile"
               component={EditProfile}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="ProfileType"
               component={ProfileType}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="EditUsername"
               component={EditUsername}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="EditBio"
               component={EditBio}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />

             {/* Health Routes */}
             <Stack.Screen
               name="SearchAppointments"
               component={SearchAppointments}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="SpecialtyDoctors"
               component={SpecialtyDoctors}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="LocationSelector"
               component={LocationSelector}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="ServiceHistory"
               component={ServiceHistory}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="CompletedAppointment"
               component={CompletedAppointment}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="AppointmentOptions"
               component={AppointmentOptions}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="ScheduleReturn"
               component={ScheduleReturn}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="Prescriptions"
               component={Prescriptions}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="ExamResults"
               component={ExamResults}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="UploadExam"
               component={UploadExam}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="HealthInfo"
               component={HealthInfo}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="PreConsultationQuestions"
               component={PreConsultationQuestions}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="SelectDateTime"
               component={SelectDateTime}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="AppointmentConfirmed"
               component={AppointmentConfirmed}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="AvailableDocuments"
               component={PlaceholderScreen}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="DocumentView"
               component={PlaceholderScreen}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="DoctorProfile"
               component={PlaceholderScreen}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="AppointmentRoom"
               component={PlaceholderScreen}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="AppointmentScheduling"
               component={PlaceholderScreen}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="ExamDetail"
               component={PlaceholderScreen}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="BlockedProfile"
               component={BlockedProfile}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="MainTabs"
               component={BottomNav}
               options={{
                 headerShown: false,
                 gestureEnabled: false
               }}
             />
             <Stack.Screen
               name="Chat"
               component={Chat}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="Pulses"
               component={Pulses}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="UserProfileExample"
               component={UserProfileExample}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="CreatePost"
               component={CreatePost}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
             <Stack.Screen
               name="CreateFlash"
               component={CreateFlash}
               options={{
                 headerShown: false,
                 gestureEnabled: true
               }}
             />
            <Stack.Screen
              name="PersonalInfo"
              component={PersonalInfo}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="MyPhones"
              component={MyPhones}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="PhoneDetails"
              component={PhoneDetails}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="PhoneVerification"
              component={PhoneVerification}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="VerificationSuccess"
              component={VerificationSuccess}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="MyAddresses"
              component={MyAddresses}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="AddAddress"
              component={AddAddress}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="MapSearch"
              component={MapSearch}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="AddressForm"
              component={AddressForm}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="EditAddress"
              component={EditAddress}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="MyCards"
              component={MyCards}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="AddCard"
              component={AddCard}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="AccountPrivacy"
              component={AccountPrivacy}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="NotificationSettings"
              component={NotificationSettings}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="AppPermissions"
              component={AppPermissions}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="PermissionDetail"
              component={PermissionDetail}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="AccountHistory"
              component={AccountHistory}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="MyLikes"
              component={MyLikes}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="Saved"
              component={Saved}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="Accessibility"
              component={Accessibility}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="SaturationSettings"
              component={SaturationSettings}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="ColorblindFilter"
              component={ColorblindFilter}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="ZoomSettings"
              component={ZoomSettings}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="DyslexiaSettings"
              component={DyslexiaSettings}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="AnimationSettings"
              component={AnimationSettings}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="TalkbackSettings"
              component={TalkbackSettings}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="AddPhone"
              component={AddPhone}
              options={{
                headerShown: false,
                gestureEnabled: true
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FeedProvider>
    </UserBlockProvider>
    </BlockedUsersProvider>
    </StoryViewerProvider>
  );
}