import BasicCard from "../../components/BasicCard/BasicCard";
import SocialLink from "../../components/SocialLink/SocialLink";

const Home = () => {
  return (
    <BasicCard>
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-secondary font-semibold text-center sm:text-left">
        Claudia Ranocchia
      </h1>
      <div className="flex flex-col sm:flex-row my-8 sm:my-14 gap-8 sm:gap-10 items-center sm:items-start w-full">
        <img
          src={"assets/photos/profile.jpeg"}
          alt="Claudia Ranocchia"
          className="w-full max-w-xs sm:max-w-sm h-auto mx-auto sm:mx-0 shrink-0"
        />
        <div className="flex flex-col gap-4 sm:gap-5 w-full min-w-0">
          <p className="text-base sm:text-lg leading-relaxed text-primary">
            Hello, welcome to my website! I am a Postdoc Researcher in
            Economics Department at{" "}
            <span className="font-semibold">Tilburg University</span>.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-primary">
            My research field is Microeconomics, working on the intersection
            between Environmental Economics and IO, and (Computable) General
            Equilibrium Models. My academic interests are green R&D, carbon
            leakage, and circular economy.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-primary font-semibold">
            I will be on the 2027-28 job market.
          </p>
        </div>
      </div>
      <div>
        <p className="text-base sm:text-lg leading-relaxed text-primary">
          After graduating in Political Science, economics-oriented curriculum,
          I completed two master's degrees in economics, interspersed with an
          experience in start-up as a Data Analyst specialized on commodity
          market prices. In 2022, I was awarded a grant to work as a research
          assistant on a project funded by the Spanish Ministry of Science and
          Innovation under the European Recovery, Transformation, and Resilience
          Plan. This public interest project aims to analyse the implications of
          the Circular Economy, with the objective of providing policy and
          environmental recommendations in the regulatory and institutional
          framework. In 2025, I obtained my PhD from the Complutense University
          of Madrid, supported by the same grant. Then, I moved to the
          Netherlands to further my interest in the circular economy. I also
          really enjoy teaching.{" "}
        </p>
      </div>
      <div className="flex my-8 sm:my-10 gap-4">
        <SocialLink />
      </div>
      <hr className="w-full border-neutral-300 my-8 sm:my-10" />
      <p className="text-secondary font-semibold text-2xl sm:text-3xl md:text-4xl">
        Working papers
      </p>
      <div className="my-6 sm:my-10 flex flex-col gap-6 sm:gap-8">
        <a
          href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4950005"
          target="_blank"
        >
          <p className="text-base sm:text-lg leading-relaxed text-primary underline">
            Porter Hypothesis vs. Pollution Haven Hypothesis: Can an
            Environmental Policy Generate a Win-Win Solution? André F.,
            Ranocchia C., Rubio S.{" "}
          </p>
        </a>
        <p className="text-base sm:text-lg leading-relaxed text-primary">
          <span className="font-semibold">Keywords</span>: Cournot competition,
          green R&D, emission tax, emission standard, Pollution Haven
          Hypothesis, Porter Hypothesis.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-primary">
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
        Publications
      </p>
      <div className="my-6 sm:my-10 flex flex-col gap-6 sm:gap-8">
        <a href="https://doi.org/10.1007/s10640-020-00533-x" target="_blank">
          <p className="text-base sm:text-lg leading-relaxed text-primary underline">
            Porter Hypothesis vs Pollution Haven Hypothesis: Can there be
            environmental policies getting two eggs in one basket? Ranocchia C.,
            Lambertini L. Environmental and Resource Economics 78: 177–199,
            2021.
          </p>
        </a>
        <p className="text-base sm:text-lg leading-relaxed text-primary">
          <span className="font-semibold">Keywords</span>: Cournot competition,
          Collusion, green R&D, emission tax, emission standard, Pollution Haven
          Hypothesis, Porter Hypothesis.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-primary">
          The paper illustrates the possibility of designing environmental
          policies able to eliminate firms' incentives to relocate their plants
          abroad and create a parallel incentive for them to deliver a win-win
          solution by investing either in replacement technologies under
          emission taxation, or in abatement technologies under an environmental
          standard.
        </p>
      </div>

      <p className="text-secondary font-semibold text-2xl sm:text-3xl md:text-4xl">
        Projects
      </p>
      <div className="my-6 sm:my-10 flex flex-col gap-6 sm:gap-8">
        <p className="text-base sm:text-lg leading-relaxed text-primary">
          Environmental and Economic Implications of the Collaborative Economy
          (TED2021-129708B-I00) 2022 - Present
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-primary">
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
