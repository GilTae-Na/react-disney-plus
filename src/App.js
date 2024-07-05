
import "./App.css";
import Nav from "./components/Nav";
import styled from "styled-components";

import { Outlet, Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from './pages/LoginPage';
import DetailPage from "./pages/DetailPage";


const Layout = () => {
  return (
    <div>
      <Nav/>

      <Outlet/>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />}/>
          <Route path=":movieId" element={<DetailPage />}/>
          <Route path="search" element={<SearchPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden; 
  display: block;
  top: 72px;
  padding: 0 calc( 3.5vw + 5px );

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute; 
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`