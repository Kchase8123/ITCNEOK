import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import MissionVision from '../components/AboutITC/MissionVision';
import Role from '../components/AboutITC/Role';
import History from '../components/AboutITC/History';
import Commitment from '../components/AboutITC/Commitment';
import TribesOverview from '../components/TribesOverview/TribesOverview';
import EECBGProgram from '../components/ProgramsServices/EECBGProgram';
import HealthWellness from '../components/ProgramsServices/HealthWellness';
import EducationCareer from '../components/ProgramsServices/EducationCareer';
import EconomicDevelopment from '../components/ProgramsServices/EconomicDevelopment';
import HousingInfrastructure from '../components/ProgramsServices/HousingInfrastructure';
import EnvironmentalProtection from '../components/ProgramsServices/EnvironmentalProtection';
import UpcomingEvents from '../components/Events/UpcomingEvents';
import FeaturedEvents from '../components/Events/FeaturedEvents';
import KeyDates from '../components/Events/KeyDates';
import AnnualMeeting from '../components/Events/AnnualMeeting';
import EventRegistration from '../components/Events/EventRegistration';
import LatestNews from '../components/NewsUpdates/LatestNews';
import MediaGallery from '../components/NewsUpdates/MediaGallery';
import TribalResources from '../components/Resources/TribalResources';
import MemberNetwork from '../components/Resources/MemberNetwork';
import GeneralInquiries from '../components/Contact/GeneralInquiries';
import AddressSocialMedia from '../components/Contact/AddressSocialMedia';
import PartnershipOpportunities from '../components/Contact/PartnershipOpportunities';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Welcome!</h1>,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "mission-vision",
        element: <MissionVision />,
      },
      {
        path: "role",
        element: <Role />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "commitment",
        element: <Commitment />,
      },
      {
        path: "tribes-overview",
        element: <TribesOverview />,
      },
      {
        path: "eecbg",
        element: <EECBGProgram />,
      },
      {
        path: "health-wellness",
        element: <HealthWellness />,
      },
      {
        path: "education-career",
        element: <EducationCareer />,
      },
      {
        path: "economic-development",
        element: <EconomicDevelopment />,
      },
      {
        path: "housing-infrastructure",
        element: <HousingInfrastructure />,
      },
      {
        path: "environmental-protection",
        element: <EnvironmentalProtection />,
      },
      {
        path: "upcoming-events",
        element: <UpcomingEvents />,
      },
      {
        path: "featured-events",
        element: <FeaturedEvents />,
      },
      {
        path: "key-dates",
        element: <KeyDates />,
      },
      {
        path: "annual-meeting",
        element: <AnnualMeeting />,
      },
      {
        path: "event-registration",
        element: <EventRegistration />,
      },
      {
        path: "latest-news",
        element: <LatestNews />,
      },
      {
        path: "media-gallery",
        element: <MediaGallery />,
      },
      {
        path: "tribal-resources",
        element: <TribalResources />,
      },
      {
        path: "member-network",
        element: <MemberNetwork />,
      },
      {
        path: "general-inquiries",
        element: <GeneralInquiries />,
      },
      {
        path: "address-social-media",
        element: <AddressSocialMedia />,
      },
      {
        path: "partnership-opportunities",
        element: <PartnershipOpportunities />,
      },
    ],
  },
]);
