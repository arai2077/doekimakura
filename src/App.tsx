import { Navigation } from "@/components/sections/navigation/Navigation";
import { Uiux } from "@/components/sections/uiux/Uiux";
import { Portfolio3d } from "@/components/sections/3d/Portfolio3d";
import { MySkills } from "@/components/sections/myskills/MySkills";
import { WorkExperience } from "./components/sections/workexperience/WorkExperience";
import { Testimonies } from "@/components/sections/testimonies/Testimonies";
import { Portfolio3d } from "./components/sections/3d/Portfolio3d";
import { MySkills } from "./components/sections/myskills/MySkills";
import { Companies } from "./components/sections/companies/Companies";

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navigation />
      <MySkills />
      <Uiux />
      <Portfolio3d />
      <WorkExperience />
      <Testimonies />
      <Companies />
    </div>
  );
};

export default App;
