import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context Providers
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { AIProvider } from './contexts/AIContext';

// Layout Components
import AppLayout from './components/Layout/AppLayout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// Lazy load screens for better performance
const Welcome = lazy(() => import('./components/Screens/Welcome'));
const Dashboard = lazy(() => import('./components/Screens/Dashboard'));
const LevelSelection = lazy(() => import('./components/Screens/LevelSelection'));
const Assessment = lazy(() => import('./components/Screens/Assessment'));
const SectionLessons = lazy(() => import('./components/Screens/SectionLessons'));
const LessonScreen = lazy(() => import('./components/Screens/LessonScreen'));
const GlossaryScreen = lazy(() => import('./components/Screens/GlossaryScreen'));
const AIChat = lazy(() => import('./components/Screens/AIChat'));
const TutorChat = lazy(() => import('./components/Screens/TutorChat'));
const Profile = lazy(() => import('./components/Screens/Profile'));
const Settings = lazy(() => import('./components/Screens/Settings'));
const APIIntegration = lazy(() => import('./components/Screens/APIIntegration'));
const Videos = lazy(() => import('./components/Screens/Videos'));

// Utils
import { getLocalData, setLocalData } from './utils/storage';
import { useResponsive } from './utils/responsive';

function App() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    // Initialize app
    const initApp = async () => {
      // Remove initial loading screen
      const loader = document.getElementById('loading');
      if (loader) loader.style.display = 'none';

      // Check if user has completed onboarding
      const hasCompletedOnboarding = getLocalData('hasCompletedOnboarding');
      const userProfile = getLocalData('userProfile');
      
      if (hasCompletedOnboarding && userProfile) {
        setIsFirstVisit(false);
      }

      // Register service worker for PWA
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        navigator.serviceWorker.register('/service-worker.js');
      }

      setIsLoading(false);
    };

    initApp();
  }, []);

  const completeOnboarding = (level) => {
    const userProfile = {
      level: level,
      createdAt: new Date().toISOString(),
      progress: { [level]: 0 },
      stats: {
        streak: 0,
        points: 0,
        badges: [],
        completedLessons: []
      }
    };
    
    setLocalData('hasCompletedOnboarding', true);
    setLocalData('userProfile', userProfile);
    setIsFirstVisit(false);
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <ThemeProvider>
      <UserProvider>
        <AIProvider>
          <Router>
            <Suspense fallback={<LoadingSpinner fullScreen />}>
              <Routes>
                {/* Onboarding Flow - No Layout */}
                <Route path="/" element={
                  isFirstVisit ? <Welcome /> : <Navigate to="/dashboard" />
                } />
                <Route path="/assessment" element={
                  <Assessment onComplete={completeOnboarding} />
                } />
                <Route path="/level-selection" element={
                  <LevelSelection onComplete={completeOnboarding} />
                } />
                
                {/* Main App - With Layout */}
                <Route element={<AppLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/section/:sectionId" element={<SectionLessons />} />
                  <Route path="/lesson/:sectionId/:lessonId" element={<LessonScreen />} />
                  <Route path="/glossary" element={<GlossaryScreen />} />
                  <Route path="/ai-chat" element={<AIChat />} />
                  <Route path="/tutor/:tutorId" element={<TutorChat />} />
                  <Route path="/videos" element={<Videos />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/api-integration" element={<APIIntegration />} />
                </Route>
                
                {/* Catch all */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
            
            {/* Toast Notifications */}
            <ToastContainer
              position={isMobile ? "bottom-center" : "bottom-right"}
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={document.body.classList.contains('dark') ? 'dark' : 'light'}
            />
          </Router>
        </AIProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
