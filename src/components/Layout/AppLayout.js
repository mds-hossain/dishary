import React from 'react';
import { Outlet } from 'react-router-dom';
import { useResponsive } from '../../utils/responsive';
import BottomNav from './BottomNav';
import DesktopSidebar from './DesktopSidebar';

const AppLayout = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div className="app-container">
      {/* Desktop Sidebar - Hidden on mobile */}
      {(isTablet || isDesktop) && <DesktopSidebar />}
      
      {/* Main Content */}
      <main className={`app-main ${isTablet || isDesktop ? 'with-sidebar' : ''}`}>
        <Outlet />
      </main>
      
      {/* Mobile Bottom Navigation - Hidden on desktop */}
      {isMobile && <BottomNav />}
    </div>
  );
};

export default AppLayout;

// Add these styles to your CSS
const styles = `
.app-container {
  position: relative;
  min-height: 100vh;
}

.app-main {
  min-height: 100vh;
  transition: padding 0.3s ease;
}

.app-main.with-sidebar {
  margin-left: var(--sidebar-width);
}

@media (max-width: 767px) {
  .app-main {
    padding-bottom: var(--nav-height-mobile);
  }
  
  .app-main.with-sidebar {
    margin-left: 0;
  }
}
`;
