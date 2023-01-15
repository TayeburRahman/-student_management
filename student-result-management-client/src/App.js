import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/authentication/SingIn';
import SignUp from './components/authentication/SingUp';
import AddResult from './components/dashboard/AddResult';
import AddSubjectCombination from './components/dashboard/AddSubjectCombination';
import Content from './components/dashboard/Content';
import CreateSubject from './components/dashboard/CreateSubject';
import DashboardMain from './components/dashboard/Dashboard.main';
import Database from './components/dashboard/Database';
import ManageResult from './components/dashboard/ManageResult';
import ManageStudents from './components/dashboard/ManageStudents';
import ManageSubject from './components/dashboard/ManageSubject';
import ManageSubjectCombination from './components/dashboard/ManageSubjectCombination';
import Paperbase from './components/dashboard/Paperbase';
import StudentsAdmission from './components/dashboard/StudentsAdmission';

function App() {
  return (
    <div className="App">
       <Routes>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>  
             <Route path="/" element={<Paperbase/>}/> 
             <Route path="dashboard" element={<Paperbase/>}> 
               <Route path='' element={<DashboardMain/>} />  
               <Route path='authentication' element={<Content/>} />  
               <Route path='admission' element={<StudentsAdmission/>} /> 
               <Route path='manage_students' element={<ManageStudents/>} /> 
               <Route path='create_subject' element={<CreateSubject/>} /> 
               <Route path='manage_subject' element={<ManageSubject/>} /> 
               <Route path='add_subject_combination' element={<AddSubjectCombination/>} /> 
               <Route path='manage_subject_combination' element={<ManageSubjectCombination/>} /> 
               <Route path='add_result' element={<AddResult/>} /> 
               <Route path='manage_result' element={<ManageResult/>} /> 
               <Route path='database' element={<Database />} />  
             </Route>
        </Routes>
    </div>
  );
}

export default App;
