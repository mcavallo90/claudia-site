const SocialLink = () => {
  return (
    <>
      <a
        href="assets/pdf/claudia_ranocchia_cv_2024.pdf"
        download="claudia_ranocchia_cv_2024.pdf"
        className="inline-flex p-1"
        aria-label="Download curriculum vitae"
      >
        <img src="assets/icons/resume.png" alt="" className="w-9 h-9 sm:w-10 sm:h-10" />
      </a>
      <a
        href="https://www.linkedin.com/in/claudia-ranocchia-113944163/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex p-1"
        aria-label="LinkedIn profile"
      >
        <img src="assets/icons/linkedin.png" alt="" className="w-9 h-9 sm:w-10 sm:h-10" />
      </a>
      <a
        href="https://twitter.com/ClauRanocchia"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex p-1"
        aria-label="X profile"
      >
        <img src="assets/icons/x.png" alt="" className="w-9 h-9 sm:w-10 sm:h-10" />
      </a>
    </>
  );
};

export default SocialLink;
