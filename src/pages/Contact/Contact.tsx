import BasicCard from "../../components/BasicCard/BasicCard";

const Contact = () => {
  return (
    <BasicCard>
      <p className="text-6xl text-secondary font-semibold">Contact</p>
      <div className="flex flex-col my-20 gap-10 text-xl">
        <a href="https://www.ucm.es/" target="_blank">
          <p className="text-primary underline">
            Universidad Complutense de Madrid
          </p>
        </a>
        <p className="text-primary">
          <span className="font-bold">Email:</span>{" "}
          <a href="mailto:claurano@ucm.es" className="underline">claurano@ucm.es</a>
        </p>
      </div>
    </BasicCard>
  );
};
export default Contact;
