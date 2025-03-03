import EECBGProgram from './EECBGProgram';
import HealthWellness from './HealthWellness';
import EducationCareer from './EducationCareer';
import EconomicDevelopment from './EconomicDevelopment';
import HousingInfrastructure from './HousingInfrastructure';
import EnvironmentalProtection from './EnvironmentalProtection';

function ProgramsServices() {
  return (
    <div className="p-8">
      <EconomicDevelopment />
      <EducationCareer />
      <EECBGProgram />
      <EnvironmentalProtection />
      <HealthWellness />
      <HousingInfrastructure />
    </div>
  );
}

export default ProgramsServices;
