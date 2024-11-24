import BasicCard from "../../components/BasicCard/BasicCard";
import SocialLink from "../../components/SocialLink/SocialLink";

const Home = () => {
  return (
    <BasicCard>
      <p className="text-6xl text-secondary font-semibold">Claudia Ranocchia</p>
      <div className="flex flex-col sm:flex-row my-20 gap-10 items-center">
        <img
          src={"assets/photos/profile.jpeg"}
          alt="profile image"
          className="w-100 h-80"
        />
        <div className="flex flex-col gap-5">
          <p className="text-base sm:text-lg md:text-xl text-primary">
            Hello, welcome to my website!
          </p>
          <p className="text-base sm:text-lg md:text-xl text-primary">
            I am a PhD candidate in Economics at Universidad Complutense de
            Madrid, currently visiting the KU Leuven's Department of Economics.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-primary">
            My research field is Microeconomics, working on the intersection
            between Environmental Economics and IO. My academic interests are
            green R&D, carbon leakage, and Circular Economy.
          </p>
        </div>
      </div>
      <div>
        <p className="text-base sm:text-lg md:text-xl text-primary">
          After graduating in Political Science, economics-oriented curriculum,
          I completed two master’s degrees in Economics, interspersed with an
          experience in start-up as a Data Analyst specialized on commodity
          market prices. In 2022, I was awarded a grant to work as a research
          assistant on a project funded by the Spanish Ministry of Science and
          Innovation under the European Recovery, Transformation, and Resilience
          Plan. This public interest project aims to analyze the implications of
          the Circular Economy, with the objective of providing policy and
          environmental recommendations in the regulatory and institutional
          framework. I am currently employed as a member of this European
          research group. I also really like teaching.{" "}
        </p>
      </div>
      <div className="flex my-10 gap-5">
        <SocialLink />
      </div>
      <hr className="w-full border my-10" />
      <p className="text-secondary font-semibold text-2xl sm:text-3xl md:text-4xl">
        Working papers
      </p>
      <div className="my-10 flex flex-col gap-10">
        <a
          href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4950005"
          target="_blank"
        >
          <p className="text-base sm:text-lg md:text-xl text-primary underline">
            Porter Hypothesis vs. Pollution Haven Hypothesis: Can an
            Environmental Policy Generate a Win-Win Solution? André F.,
            Ranocchia C., Rubio S.{" "}
          </p>
        </a>
        <p className="text-base sm:text-lg md:text-xl text-primary">
          <span className="font-semibold">Keywords</span>: Cournot competition,
          green R&D, emission tax, emission standard, Pollution Haven
          Hypothesis, Porter Hypothesis.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-primary">
          This paper extends the previous work, "Porter Hypothesis vs Pollution
          Haven Hypothesis: Can there be environmental policies getting two eggs
          in one basket?". We repeat the analysis within a non-cooperative game
          framework, also examining the equilibrium outcomes irrespective of the
          relative size of relocation and investment costs. Our findings
          reaffirm the strategic role of policymakers in designing environmental
          policies to achieve a win-win equilibrium. Additionally, we broaden
          the conditions under which this equilibrium is attainable.
        </p>
      </div>

      <p className="text-secondary font-semibold text-2xl sm:text-3xl md:text-4xl">
        Publications 2021
      </p>
      <div className="my-10 flex flex-col gap-10">
        <a href="https://doi.org/10.1007/s10640-020-00533-x" target="_blank">
          <p className="text-base sm:text-lg md:text-xl text-primary underline">
            Porter Hypothesis vs Pollution Haven Hypothesis: Can there be
            environmental policies getting two eggs in one basket?
          </p>
        </a>
        <p className="text-base sm:text-lg md:text-xl text-primary">
          <span className="font-semibold">Keywords</span>: Cournot competition,
          Collusion, green R&D, emission tax, emission standard, Pollution Haven
          Hypothesis, Porter Hypothesis.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-primary">
          The paper illustrates the possibility of designing environmental
          policies able to eliminate firms' incentives to relocate their plants
          abroad and create a parallel incentive for them to deliver a win-win
          solution by investing either in replacement technologies under
          emission taxation, or in abatement technologies under an environmental
          standard. Ranocchia C., Lambertini L. Environmental and Resource
          Economics 78: 177–199.
        </p>
      </div>

      <p className="text-secondary font-semibold text-2xl sm:text-3xl md:text-4xl">
        Project: 11/2022 – current
      </p>
      <div className="my-10 flex flex-col gap-10">
        <p className="text-base sm:text-lg md:text-xl text-primary">
          Environmental and Economic Implications of the Collaborative Economy
          (TED2021-129708B-I00){" "}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-primary">
          In 2022, I was awarded a grant to work as a research assistant on the
          project “Environmental and Economic Implications of the Collaborative
          Economy” (reference TED2021-129708B-I00), funded by the Ministry of
          Science and Innovation under the Recovery, Transformation, and
          Resilience Plan of the Spanish Government. My PhD is funded by this
          project, and its academic outcomes form part of my doctoral thesis.
          The objective of this project is to analyze the environmental and
          economic implications of the Circular Economy, with a focus on
          Collaborative Consumption, Sharing Economy and the Second-Hand Market.
          We address these issues from both a theoretical and an applied
          microeconomic perspective.{" "}
        </p>
      </div>
    </BasicCard>
  );
};

export default Home;
