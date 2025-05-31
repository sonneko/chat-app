import { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';

// my page component
import RootPage from './pages/RootPage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import RoomsPage from './pages/RoomsPage';
import RoomPage from './pages/RoomPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import NotFoundPage from './pages/NotFound';

const App: Component = () => {
  return (
    <>
      <Router>
        <Route path='/' component={RootPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/signin' component={SigninPage} />

        <Route path='/rooms' component={RoomsPage} />
        <Route path='/room/:roomId' component={RoomPage} />
        <Route path='/profile/:userId' component={ProfilePage} />
        <Route path='/setting' component={SettingPage} />

        <Route path='/*' component={NotFoundPage} />
      </Router>
    </>
  )
};

export default App;
