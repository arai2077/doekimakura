import { Navigation } from "@/components/sections/navigation/Navigation";
import { Uiux } from "@/components/sections/uiux/Uiux";
import { Portfolio3d } from "./components/sections/3d/Portfolio3d";

const App = () => {
  return (
    <div className="flex flex-col gap-[var(--spacing-3xl)]">
      <Navigation />
      <Uiux />
      <Portfolio3d />
    </div>
  );
};

export default App;
