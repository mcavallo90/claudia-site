import SocialLink from "../SocialLink/SocialLink";

const Footer = () => {
  return (
    <div className="w-full bg-nav">
      <div className="px-5 py-6 sm:p-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 items-center text-base sm:text-xl text-secondary text-center">
        <a
          href="mailto:c.ranocchia@tilburguniversity.edu"
          className="underline underline-offset-4 break-all max-w-full"
        >
          c.ranocchia@tilburguniversity.edu
        </a>
        <div className="flex gap-8 sm:gap-10 justify-center items-center">
          <SocialLink />
        </div>
      </div>
    </div>
  );
};

export default Footer;
