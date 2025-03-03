// import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../../../dist/favicon.ico";

const navItems = [
  {
    title: "About ITC",
    links: [
      { label: "Mission and Vision", href: "/mission-vision" },
      { label: "Role", href: "/role" },
      { label: "History", href: "/history" },
      { label: "Commitment", href: "/commitment" },
      { label: "Tribes Overview", href: "/tribes-overview" },
    ],
  },
  {
    title: "Programs & Services",
    links: [
      { label: "EECBG Program", href: "/eecbg" },
      { label: "Health & Wellness", href: "/health-wellness" },
      { label: "Education & Career", href: "/education-career" },
      { label: "Economic Development", href: "/economic-development" },
      { label: "Housing & Infrastructure", href: "/housing-infrastructure" },
      { label: "Environmental Protection", href: "/environmental-protection" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "Upcoming Events", href: "/upcoming-events" },
      { label: "Featured Events", href: "/featured-events" },
      { label: "Key Dates", href: "/key-dates" },
      { label: "Annual Meeting", href: "/annual-meeting" },
      { label: "Event Registration", href: "/event-registration" },
    ],
  },
  {
    title: "News & Updates",
    links: [
      { label: "Latest News", href: "/latest-news" },
      { label: "Media Gallery", href: "/media-gallery" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Tribal Resources", href: "/tribal-resources" },
      { label: "Member Network", href: "/member-network" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "General Inquiries", href: "/general-inquiries" },
      { label: "Address & Social Media", href: "/address-social-media" },
      { label: "Partnership Opportunities", href: "/partnership-opportunities" },
    ],
  },
];

function Navigation() {
  return (
    <nav className="bg-gray-800 bg-opacity-75 p-6 fixed top-0 left-0 w-full z-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between space-x-4">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="ITC Logo" className="h-10 w-10 rounded-full" />
          <span className="text-white text-lg font-bold">Inter-Tribal Council of Northeast Oklahoma</span>
        </NavLink>
        <ul className="flex items-center space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Dropdown title={item.title} links={item.links} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
