import SocialLink from "../../components/SocialLink/SocialLink";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center px-48 py-20">
      <p className="text-6xl text-secondary font-semibold">Claudia Ranocchia</p>
      <div className="flex my-20 gap-10">
        <img src="/assets/photos/profile.jpeg" alt="" className="w-100 h-80" />
        <div className="flex flex-col gap-5">
          <p className="text-xl text-primary">Hello, welcome to my website!</p>
          <p className="text-xl text-primary">I'm a Environmental Economist.</p>
          <p className="text-xl text-primary">
            I am currently a PHD Student at Universidad Complutense de Madrid.
          </p>
        </div>
      </div>
      <div className="flex my-10 gap-5">
        <SocialLink />
      </div>
      <hr className="w-full border my-10" />
      <p className="text-secondary font-semibold text-4xl">Working papers</p>
      <div className="my-10 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-xl text-primary">
            Skills, Distortions, and the Labor Market Outcomes of Immigrants
            across Space (current draft available upon request - new draft in
            preparation) The paper received the "Peter Sinclair Prize" as the
            3rd best paper at the Macro, Monetary and Finance (MMF) PhD
            Conference (Slides)
          </p>
          <p className="text-xl text-primary">
            I study the geography of immigrants' labor market outcomes and its
            implications for spatial inequality. Using US micro-data, I document
            that, compared to natives and immigrants from high-income countries,
            immigrants from low-income countries i) do not earn a premium from
            working in big cities and ii) are more likely to work in
            non-cognitive occupations and live in big cities. To shed light on
            the mechanisms driving these facts, I build a quantitative general
            equilibrium spatial model where the technology of firms in cities
            favors cognitive skills, workers are heterogeneous in human capital
            and tastes for cities and occupations, and immigrants face labor
            market distortions. Removing all sources of heterogeneity between
            immigrants and natives reduces their earnings gap by 29 percent at
            the expense of an increase in the earnings gap between cities by 2.3
            percent. An immigration policy opening borders to
            non-college-educated workers increases the earnings gap between
            immigrants and natives by 1.6 percent but reduces the earnings gap
            between cities by 1.3 percent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
