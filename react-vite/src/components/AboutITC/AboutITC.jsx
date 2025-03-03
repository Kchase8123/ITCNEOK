import MissionVision from './MissionVision';
import Role from './Role';
import History from './History';
import Commitment from './Commitment';
import TribesOverview from '../TribesOverview/TribesOverview';

function AboutITC() {
  return (
    <div className="p-8">
      <MissionVision />
      <Role />
      <History />
      <Commitment />
      <TribesOverview />
    </div>
  );
}

export default AboutITC;
