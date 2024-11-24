const SocialLink = () => {
  return (
    <>
      <a href="assets/pdf/claudia_ranocchia_cv_2024.pdf" download="claudia_ranocchia_cv_2024.pdf">
        <img src="assets/icons/resume.png" alt="resume" className="w-10 h-10" />
      </a>
      <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAACcdu58BNGBF4F1h3S6O6KKHU842Gxv2dys&keywords=claudia%20ranocchia&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c0c9ccab-5553-4362-b2e7-ef3bcd4a3d9b&sid=n%3Ax&spellCorrectionEnabled=false" target="_blank">
        <img
          src="assets/icons/linkedin.png"
          alt="linkedin"
          className="w-10 h-10"
        />
      </a>
      <a href="https://x.com/cranocchia21" target="_blank">
        <img src="assets/icons/x.png" alt="x" className="w-10 h-10" />
      </a>
    </>
  );
};

export default SocialLink;
