import SocialLink from "../SocialLink/SocialLink";

const Footer = () => {
  return (
    <div className="w-full bg-nav">
      <div className="mt-10 p-5 flex flex-col sm:flex-row justify-between items-center text-xl text-secondary">
        <div>Claudia Ranocchia</div>
        <div>
          <a href="mailto:claurano@ucm.es" className="underline">
            claurano@ucm.es
          </a>
        </div>
        <div>Universidad Autonoma de Madrid</div>
      </div>
      <div className="flex gap-10 justify-center p-5 items-center">
        <SocialLink />
      </div>
    </div>
  );
};

export default Footer;
