import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar,
  faMoneyBill,
  faCaretDown,
  faCaretUp
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/at1logo.PNG';
import '../Css/dashboard.css';

const menuItems = [
  {
    id: 1,
    label: 'Profile',
    icon: faUser,
    submenuItems: [
      { id: 11, label: 'School Details', to: '/Academic' },
      { id: 12, label: 'Student Registration', to: '/Registration' },
      { id: 13, label: 'Staff Registration', to: '/StaffRegistration' },
      { id: 14, label: 'Attendance Details', to: '/AttendanceDetails' },
      { id: 15, label: 'Fees Details', to: '/FeesDetails' },
      { id: 16, label: 'Holiday Details', to: '/HolidayDetails' }
    ]
  },
  {
    id: 2,
    label: 'Academy',
    icon: faUser,
    submenuItems: [
      { id: 17, label: 'Fee Structure', to: '/Academic' },
      { id: 18, label: 'Attendance', to: '/Attendance' },
      { id: 19, label: ' Leaves Summary ', to: '/StaffRegistration' },
      { id: 20, label: 'Certificates', to: '/AttendanceDetails' }
    ]
  },

];


const LeftSide = () => {
  const [showSubMenu, setShowSubMenu] = useState(null);

  const toggleSubMenu = (id) => {
    setShowSubMenu(showSubMenu === id ? null : id);
  };

  return (
    <div className="left-side">
      <div className="logod">
        <img src={Logo} alt="logo" />
      </div>
      <div className="dark-theme">
        <p>Dashboard</p>
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.id} className="dropdown" onClick={() => toggleSubMenu(menuItem.id)}>
              <div>
                <FontAwesomeIcon icon={menuItem.icon} /> {menuItem.label}
                <FontAwesomeIcon
                  icon={showSubMenu === menuItem.id ? faCaretUp : faCaretDown}
                  className="dropdown-icon"
                />
              </div>
              {showSubMenu === menuItem.id && (
                <ul className="submenu">
                  {menuItem.submenuItems.map((submenuItem) => (
                    <li key={submenuItem.id}>
                      <Link to={submenuItem.to}>
                        <FontAwesomeIcon icon={faUser} /> {submenuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
          <Link to="/FeesRecord">
                    <FontAwesomeIcon icon={faUser} />  Annual Fees Record
                  </Link>
          </li>
          <li>
          <Link to="/FeesRecord">
                    <FontAwesomeIcon icon={faUser} />  Calender
                  </Link>
          </li>
          <li>
          <Link to="/FeesRecord">
                    <FontAwesomeIcon icon={faUser} />  FeedBack
                  </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};



// Header Component
const Header = () => (
  <div className="header">
    <input type="text" placeholder="Search" />
    <div className="buttons">
      <button>Report</button>
      <button>Profile</button>
      <button>Notification</button>
      <button>Sign Out</button>
    </div>
  </div>
);

// Overview Dashboard Component
const OverviewDashboard = () => (
  <div className="overview-dashboard">
    <h2>Overview Dashboard</h2>
    <div className="buttons">
      <button>Fees</button>
      <button>Attendance</button>
    </div>
    <div className="content">
      {/* This part can be dynamic based on the button clicked */}
      <p>Coming soon...</p>
    </div>
  </div>
);

// Dashboard Component
const Dashboard = () => {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate('/Registration');
  };

  return (
    <div>
      <LeftSide />
      <Header />
      <OverviewDashboard />
      <button onClick={handleRegistrationClick}>
        Go to Registration
      </button>
    </div>
  );
};

export default Dashboard;
