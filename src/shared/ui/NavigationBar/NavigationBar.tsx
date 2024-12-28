import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavigationBar.module.css';

export interface NavItem {
  label: string;
  path?: string | null;
  element?: React.ReactNode | null;
  dropdown?: NavItem[];
}

interface NavigationBarProps {
  menuItems: NavItem[];
}

// const subitemRender = (item: NavItem) => {
//     return (
//         <div className={style.dropdown}>
//             {item.dropdown?.map((subItem) => (
//                 <div key={subItem.label}>
//                     <NavLink
//                         to={subItem.path}
//                         className={style.link}
//                     >
//                         {subItem.label}
//                     </NavLink>
//                     {subItem.dropdown && subitemRender(subItem)}
//                 </div>
//             ))}
//         </div>
//     );
// };

// const NavigationBar: React.FC<NavigationBarProps> = ({ menuItems }) => {
//     return (
//         <nav className={style.navbar}>
//             {menuItems.map((item) => (
//                 <div key={item.label} className={style.navItem}>
//                     <NavLink
//                         to={item.path}
//                         className={style.link}
//                     >
//                         {item.label}
//                     </NavLink>
//                     {item.dropdown && (subitemRender(item))}
//                 </div>
//             ))}
//         </nav>
//     );
// };

const NavigationBar: React.FC<NavigationBarProps> = ({ menuItems }) => {
  return (
    <nav className={style.navbar}>
      {menuItems.map((item) => (
        <div key={item.path + item.label} className={style.navItem}>
          <NavLink to={item.path} className={style.link}>
            {item.label}
          </NavLink>
          {item.dropdown && (
            <div className={style.dropdown}>
              {item.dropdown.map((subItem) => (
                <NavLink key={subItem.path + subItem.label} to={subItem.path} className={style.link}>
                  {subItem.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavigationBar;
