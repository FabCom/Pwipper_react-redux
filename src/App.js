
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home/index.jsx'
import { useNavigate } from "react-router-dom";
import { Navbar } from "./components/navbar/index.jsx";
import { Box } from "@mui/system";
import { ThemeContext } from "./ThemeContext.jsx";
import RegisterForm from "./pages/Connection/RegisterForm.jsx";
import LoginForm from "./pages/Connection/LoginForm.jsx";
import MyProfile from "./pages/Profiles/MyProfile"


export function App() {
  const Theme_Context = useContext(ThemeContext)

  const Theme =  React.useMemo( () => createTheme(Theme_Context[0]),[Theme_Context] )


  // console.log(Theme)

  return (


      <ThemeProvider theme={Theme}>
        <Router>            
          <Navbar/>
          
          <Box sx={{width: '100%', minHeight: '94vh', height: '100%', backgroundColor: "background.paper"} }>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/register'} element={<RegisterForm />} />
              <Route path={'/login'} element={<LoginForm />} />
              <Route path={'/myprofile'} element={<MyProfile />} />
            </Routes>
          </Box> 
        </Router>
      </ThemeProvider>

  );
}

export default App;
