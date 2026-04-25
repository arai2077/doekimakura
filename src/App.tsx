import { Navigation } from "@/components/sections/navigation/Navigation";
import { Uiux } from "@/components/sections/uiux/Uiux";
import { Portfolio3d } from "@/components/sections/3d/Portfolio3d";
import { MySkills } from "@/components/sections/myskills/MySkills";
import { WorkExperience } from "./components/sections/workexperience/WorkExperience";
import { Testimonies } from "@/components/sections/testimonies/Testimonies";
import { Companies } from "./components/sections/companies/Companies";
import { Contact } from "./components/sections/contact/Contact";
import { Footer } from "./components/sections/footer/Footer";

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navigation />
      <MySkills />
      <section id="uiux">
        <Uiux />
      </section>
      <section id="3d">
        <Portfolio3d />
      </section>
      <section id="illust">
        <Testimonies />
      </section>
      <section id="job-experience">
        <WorkExperience />
      </section>
      <section id="info">
        <div>
          <Companies />
          <Contact />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
