import React from 'react';
import { NavItem } from '../NavigationBar/NavigationBar';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Services = () => <div>Services Page</div>;
const WebDevelopment = () => <div>Web Development Page</div>;
const MobileApps = () => <div>Mobile Apps Page</div>;
const Contact = () => <div>Contact Page</div>;
const ReactDevelopment = () => <div>React Development Page</div>;
const VanillaJSDevelopment = () => <div>Vanilla JS Development Page</div>;

export const menuItems: NavItem[] = [
  { label: 'Home', path: '/otus_react.github.io/', element: <Home /> },
  {
    label: 'Services',
    // path: null,
    // element: null,
    // path: "/services",
    // element: <Services />,
    dropdown: [
      {
        label: 'Web Development',
        path: '/otus_react.github.io/services/web',
        element: <WebDevelopment />,
        dropdown: [
          {
            label: '- React Development',
            path: '/otus_react.github.io/services/web/react',
            element: <ReactDevelopment />,
          },
          {
            label: '- Vanilla JS Development',
            path: '/otus_react.github.io/services/web/js',
            element: <VanillaJSDevelopment />,
          },
        ],
      },
      { label: 'Mobile Apps', path: '/otus_react.github.io/services/mobile', element: <MobileApps /> },
    ],
  },
  { label: 'About', path: '/otus_react.github.io/about', element: <About /> },
  { label: 'Contact', path: '/otus_react.github.io/contact', element: <Contact /> },
];
