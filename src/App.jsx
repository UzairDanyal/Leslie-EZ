// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing'; // Your main page component
import FreeRegistration1 from './Components/FreeRegistration1';
import Flag1 from './Components/Flag1';
import LookAround from './Components/LookAround.jsx';
import Registration2 from './Components/Registration2'; // Import Registration component
import RegistrationForm31 from './Components/RegistrationForm31';
import EmailNotRecognized from './Components/EmailNotRecognized';
import SavedEmail from './Components/SavedEmail';
import Virtual2 from './Components/Virtual2';
import Proof from './Components/Proof';
import ContactUs from './Components/ContactUs';
import VBEnd from './Components/VBEnd';
import i18n from './Components/i18n.jsx';
import VirtualPage from './Components/VirtualPage';
import TradePerson from './Components/TradePerson';
import Enter from './Components/Enter';
import Unrecognized from './Components/Unrecognized';
import Enter1 from './Components/Enter1';
import SalutationPage from './Components/SalutationPage';
import StepComponent from './Components/StepComponent';
import Apartment from './Components/Apartment';
import VirtualHouse from './Components/VirtualHouse';
import Parking from './Components/Parking';
import Booking from './Components/Booking';
import EmergencyPage from './Components/EmergencyPage';
import ServiceSelection from './Components/ServiceSelection';
import WaitingList from './Components/WaitingList';
import Estimate from './Components/Estimate';
import LesWork from './Components/LesWork';
import VideoReference from './Components/VideoReference';
import LESTHEHANDYMAN from './Components/LESTHEHANDYMAN';
import Page1 from './Components/Page1';
import Paage2 from './Components/Paage2';
import Paage4 from './Components/Paage4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Page9 from './Components/Page9';
import Page10 from './Components/Page10';
import Page17 from './Components/Page17';
import Page16 from './Components/Page16';
import Paage19 from './Components/Paage19';
import Page12 from './Components/page12';
import Page13 from './Components/Page13';
import Page3 from './Components/Page3';
import NewTradePerson from './Components/NewTradePerson';
import Add from './Components/Add';
import Add1 from './Components/Add1';
import Page7 from './Components/Page7';
import Page14 from './Components/Page14';
import Les1 from './Components/Les1';
import Les3 from './Components/Les3';
import Les4 from './Components/Les4';
import JoinUS from './Components/JoinUS';
import RegistrationForm32 from './Components/RegistrationForm32';
import RegistrationForm33 from './Components/RegistrationForm33';
import RegistrationForm34 from './Components/RegistrationForm34';
import RegistrationForm35 from './Components/RegistrationForn35.jsx';
import Welcome from './Components/Welcome';
import EnterS from './Components/EnterS';
import EnterS1 from './Components/EnterS1';
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Main page */}
        <Route path="/FreeRegistration1" element={<FreeRegistration1 />} />
        <Route path="/Flag1" element={<Flag1 />}/>
        <Route path="/LookAround" element={<LookAround />}/> {/* Add FreeRegistration route */}
        <Route path="/Registration2" element={<Registration2 />} /> {/* Add Registration route */}
        <Route path="/RegistrationForm31" element={<RegistrationForm31 />} /> 
          {/* Email Not Recognized page */}
          <Route path="/EmailNotRecognized" element={<EmailNotRecognized />} />
          <Route path="/SavedEmail" element={<SavedEmail />} />
          <Route path="/Virtual2" element={<Virtual2/>} />
          <Route path="/Proof" element={<Proof />}/>
          <Route path="/ContactUs" element={<ContactUs />}/>
          <Route path="/VBEnd" element={<VBEnd />}/>
          <Route path="/i18n" element={<i18n />}/> 
          <Route path="/VirtualPage" element={<VirtualPage/>}/>
          <Route path="/TradePerson" element={<TradePerson/>}/>
          <Route path="/Enter" element={<Enter/>}/>
          <Route path="/Unrecognized" element={<Unrecognized/>}/>
          <Route path="/Enter1" element={<Enter1/>}/>
          <Route path="/SalutationPage" element={<SalutationPage/>}/>
          <Route path="StepComponent" element={<StepComponent/>}/>
          <Route path="Apartment" element={<Apartment/>}/> 
          <Route path="/VirtualHouse" element={<VirtualHouse/>}/>
          <Route path="/Parking" element={<Parking/>}/>
          <Route path="/Booking" element={<Booking/>}/>     
          <Route path="EmergencyPage" element={<EmergencyPage/>}/>
          <Route path="ServiceSelection" element={<ServiceSelection/>}/>   
          <Route path="Welcome" element={<Welcome/>}/>
          <Route path="Estimate" element={<Estimate/>}/>
          <Route path="WaitingList" element={<WaitingList/>}/>
          <Route path="LesWork" element={<LesWork/>}/>
          <Route path="VideoReference" element={<VideoReference/>}/>
          <Route path="LESTHEHANDYMAN" element={<LESTHEHANDYMAN/>}/>
          <Route path="Page1" element={<Page1/>}/>
          <Route path="Page3" element={<Page3/>}/>
          <Route path="/NewTradePerson" element={<NewTradePerson/>}/>
          <Route path="Add" element={<Add/>}/>
          <Route path="Add1" element={<Add1/>}/>
          <Route path="Paage2" element={<Paage2/>}/>
          <Route path="Paage4" element={<Paage4/>}/>
          <Route path="Page5" element={<Page5/>}/>
          <Route path="Page6" element={<Page6/>}/>
          <Route path="Page9" element={<Page9/>}/>
          <Route path="Page10" element={<Page10/>}/>
          <Route path="Page13" element={<Page13/>}/>
          <Route path="Page16" element={<Page16/>}/>
          <Route path="Page12" element={<Page12/>}/>
          <Route path="Page7" element={<Page7/>}/>
          <Route path="Page14" element={<Page14/>}/>
          <Route path="Paage19" element={<Paage19/>}/>
          <Route path="Page17" element={<Page17/>}/>
          <Route path="Les1" element={<Les1/>}/>
          <Route path="Les3" element={<Les3/>}/>
          <Route path="Les4" element={<Les4/>}/>
          <Route path="JoinUS" element={<JoinUS/>}/>
          <Route path="/RegistrationForm32" element={<RegistrationForm32 />} /> 
          <Route path="/RegistrationForm33" element={<RegistrationForm33 />} /> 
          <Route path="/RegistrationForm34" element={<RegistrationForm34 />} /> 
          <Route path="/RegistrationForm35" element={<RegistrationForm35 />} /> 
          <Route path="/EnterS" element={<EnterS />} /> 
          <Route path="/EnterS1" element={<EnterS1 />} /> 
           
          
          


   </Routes>
    </Router> 
     );
}

export default App;

