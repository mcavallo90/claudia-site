import SocialLink from "../SocialLink/SocialLink";

const Footer = () => {
  return (
    <div className="w-full bg-nav">
      <div className="p-10 flex flex-col sm:flex-row justify-center gap-10 items-center text-xl text-secondary text-center">
        <a href="mailto:claurano@ucm.es" className="underline">
          claurano@ucm.es
        </a>
        <div className="flex gap-10 justify-center items-center">
          <SocialLink />
        </div>
      </div>
    </div>
  );
};

export default Footer;
