import { Banner } from "../../components/banner/Banner";
import { Features } from "../../components/features/Features";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div>
      <main>
        <Banner />
        <section className="features">
          <Features
            iconUrl="src\assets\images\icon-chat.webp"
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <Features
            iconUrl="src\assets\images\icon-money.webp"
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
          />
          <Features
            iconUrl="src\assets\images\icon-security.webp"
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
    </div>
  );
};

export { HomePage };
