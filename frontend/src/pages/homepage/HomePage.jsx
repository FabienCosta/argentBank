import { Banner } from "../../components/banner/Banner";
import { Features } from "../../components/features/Features";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div>
      <main>
        <Banner />
        <Features />
      </main>
    </div>
  );
};

export { HomePage };
