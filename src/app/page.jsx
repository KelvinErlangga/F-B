import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Promotion from "../components/Promotion";
import BranchLocator from "../components/BranchLocator";
import Review from "../components/Review";

export default function Home() {
  return (
    <div>
      <Hero />
      <Menu />
      <Promotion />
      <BranchLocator />
      <Review />
    </div>
  );
}
