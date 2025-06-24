import React from 'react';
import Navbar from './Header/Navbar';
import Home from './Home/Home.jsx';
import Footer from './Header/Footer.jsx';
import About from './About/About.jsx';
import { Route, Routes } from 'react-router-dom';
import Services from './Services/Services.jsx';
import Contact from './Conatct/Contact.jsx';
import Dance from './Dance/Dance.jsx';
import Music from './Music/Music.jsx';
import Art from './Art/Art.jsx';
import Objective from './Objective/Objective.jsx';
import Goverment from './Government/goverment.jsx';
import Assement from './Assement/Assement.jsx';
import Training from './Traning/Training.jsx';
import Examiner from './Examiner/Examiner.jsx';
import Instructure from './Instructure/Instructure.jsx';
import Download from './Downlaod/Download.jsx';
import Forms from './Form/Forms.jsx';
import Opening from './Currentopening/Opening.jsx';
import Internship from './Internship/Intenship.jsx';
import Event from './PastEvent/Event.jsx';
import Gallery from './Gallery/Gallery.jsx';
import Policies from './PoliciesGuidlines/Policies.jsx';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services/>}/>
          <Route path ='/contact' element={<Contact/>}/>
          <Route path ='/dance' element={<Dance/>}/>
          <Route path ='/music' element={<Music/>}/>
          <Route path ='/art' element={<Art/>}/>
          <Route path ='/objective' element={<Objective/>}/>
          <Route path ='/goverment' element={<Goverment/>}/>
        <Route path ='/assement' element={<Assement/>}/>
        <Route path ='/training' element={<Training/>}/>
        <Route path ='/examiner' element={<Examiner/>}/>
        <Route path ='/Instructure' element={<Instructure/>}/>
                <Route path ='/Download' element={<Download/>}/>
          <Route path ='/Form' element={<Forms/>}/>
       <Route path ='/opening' element={<Opening/>}/>

       <Route path ='/intenship' element={<Internship/>}/>
              <Route path ='/event' element={<Event/>}/>
        <Route path ='/galley' element={<Gallery/>}/>
                <Route path ='/polices' element={<Policies/>}/>









       </Routes>

      <Footer />
    </>
  );
};

export default App;
