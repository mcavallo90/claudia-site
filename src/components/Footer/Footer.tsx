import SocialLink from "../SocialLink/SocialLink";

const Footer = () => {
  return (
    <>
      <div className="p-5 flex justify-between items-center text-xl text-secondary">
        <div>Claudia Ranocchia</div>
        <div>claudiaranocchia@gmail.com</div>
        <div>Universidad Autonoma de Madrid</div>
      </div>
      <div className="flex gap-10 justify-center p-5 items-center">
        <SocialLink />
      </div>
    </>
  );
};

export default Footer;
