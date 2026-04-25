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
      <section id="my-skills" className="mb-3xl">
        <MySkills />
      </section>
      <section id="uiux" className="mb-3xl">
        <Uiux />
      </section>
      <section id="3d" className="mb-3xl">
        <Portfolio3d />
      </section>
      <section id="illust" className="mb-3xl">
        <Testimonies />
      </section>
      <section id="job-experience" className="mb-3xl">
        <WorkExperience />
      </section>
      <section id="info" className="mb-3xl">
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
