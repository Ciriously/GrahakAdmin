import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

import Logo from '../../images/logo/logo.svg';

import Dashboard from './Images/General/Home.svg';
import Message from './Images/General/Message-Mail.svg';
import Tickets from './Images/General/Tickets.svg';
import Analytics from './Images/General/Analytics.svg';
import AddTeam from './Images/General/AddTeam.svg';
import Widgets from './Images/General/widget.svg';
import Database from './Images/General/Database.svg';

import Activity from './Images/Myspace/Flag.svg';
import Shared from './Images/Myspace/Multi User.svg';
import Privacy from './Images/Myspace/Privacy Shield.svg';

import Settings from './Images/Support/Setting-Gear.svg';
import Help from './Images/Support/Question Mark.svg';
import Chat from './Images/Support/Chat.svg';

import Logout from './Images/Logout-Exit.svg';
import Search from './Images/Search-Magnifier.svg';
import Add from './Images/Add.svg';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" width={223} />
            {/* <p>Company Name</p> */}
          </div>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-0 px-4 lg:mt-2 lg:px-4">
          <div className="relative shadow-md mb-4">
            <img
              src={Search}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-green-400">
              General
            </h3>

            <ul className="mb-2 flex flex-col gap-0.4">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <li>
                      <NavLink
                        to="/"
                        className={`group relative text-sm flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out ${
                          pathname.includes('calendar') && ''
                        }`}
                      >
                        <img src={Dashboard} alt="Dashboard" width={24} />
                        Dashboard
                      </NavLink>
                    </li>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <NavLink
                  to="/calendar"
                  className={`group relative flex text-sm items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out ${
                    pathname.includes('calendar') && ''
                  }`}
                >
                  <img src={Message} alt="Message" width={24} />
                  Message
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex justify-between text-sm items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <img src={Tickets} alt="Tickets" width={24} />
                    Tickets
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-xs items-center justify-center h-6 w-6 rounded-full mr-2 bg-purple-200 text-[#8204FF]">
                      5
                    </div>
                    <img src={Add} alt="Add" width={24} />
                  </div>
                </NavLink>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Forms --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative text-sm flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <img src={Analytics} alt="Analytics" width={24} />
                  Analytics
                </NavLink>
              </li>
              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Item Tables --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative text-sm flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <img src={AddTeam} alt="AddTeam" width={24} />
                  Add Team
                </NavLink>
              </li>
              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative text-sm flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <img src={Widgets} alt="Widgets" width={24} />
                  Customize Widget
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex justify-between text-sm items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <img src={Database} alt="Database" width={24} />
                    Database
                  </div>
                  <img src={Add} alt="Add" width={24} />
                </NavLink>
              </li>
            </ul>
          </div>
          <hr className="my-2 border-gray-300" />

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-green-400">
              Myspace
            </h3>

            <ul className="mb- flex flex-col gap-0.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative text-sm flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <img src={Activity} alt="Activity" width={24} />
                  Activity
                </NavLink>
              </li>
              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Ui Elements --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex text-sm items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <img src={Shared} alt="Shared" width={24} />
                  Shared
                </NavLink>
              </li>
              {/* <!-- Menu Item Ui Elements --> */}

              {/* <!-- Menu Item Auth Pages --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative text-sm flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <img src={Privacy} alt="Privacy" width={24} />
                  Privacy
                </NavLink>
              </li>
              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
          </div>
          <hr className="my-2 border-gray-300" />
          {/* <!-- Support --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-green-400">
              Support
            </h3>

            <ul className="mb-4 flex flex-col gap-0.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative text-sm flex items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <img src={Settings} alt="Setting" width={24} />
                  Setting
                </NavLink>
              </li>
              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Ui Elements --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex text-sm items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <img src={Help} alt="Help" width={24} />
                  Help!
                </NavLink>
              </li>
              {/* <!-- Menu Item Ui Elements --> */}

              {/* <!-- Menu Item Auth Pages --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex justify-between text-sm items-center gap-2.5 rounded-sm py-2 px-2 font-medium text-[#006A66] duration-300 ease-in-out  ${
                    pathname.includes('profile') && ''
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <img src={Chat} alt="Tickets" width={24} />
                    Chats
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-xs items-center justify-center h-6 w-6 rounded-full mr-2 bg-purple-200 text-[#8204FF]">
                      12
                    </div>
                    <img src={Add} alt="Add" width={24} />
                  </div>
                </NavLink>
              </li>
              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
          </div>
          <hr className="my-2 border-gray-100" />
          <div className="flex items-center justify-between py-2 px-4">
            <p className="text-lg font-medium text-[#006A66]">Logout</p>
            <img src={Logout} alt="Logout" width={24} />
          </div>
          {/* <!-- Logout --> */}
        </nav>

        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
