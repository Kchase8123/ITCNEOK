import EasternShawnee from './EasternShawnee';
import Miami from './Miami';
import Modoc from './Modoc';
import Ottawa from './Ottawa';
import Peoria from './Peoria';
import Quapaw from './Quapaw';
import SenecaCayuga from './SenecaCayuga';
import Shawnee from './Shawnee';
import Wyandotte from './Wyandotte';

function TribesOverview() {
  return (
    <section className="mb-8 pt-24">
      <h2 className="text-3xl font-bold mb-4">Overview of Each Tribe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EasternShawnee />
        <Miami />
        <Modoc />
        <Ottawa />
        <Peoria />
        <Quapaw />
        <SenecaCayuga />
        <Shawnee />
        <Wyandotte />
      </div>
    </section>
  );
}

export default TribesOverview;
