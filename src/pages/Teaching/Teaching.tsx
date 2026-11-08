import BasicCard from "../../components/BasicCard/BasicCard";

const Teaching = () => {
  return (
    <BasicCard>
      <h1 className="text-3xl sm:text-5xl text-secondary font-semibold">
        Teaching
      </h1>
      <div className="flex flex-col my-8 sm:my-14 text-primary">
        <p className="text-secondary font-semibold text-lg sm:text-2xl leading-snug">
          Associate collaborator Universidad Comillas de Madrid (2022-2023)
        </p>
        <p className="my-5 text-base sm:text-lg leading-relaxed text-primary">
          Professor at Universidad de Comillas de Madrid at the faculty of
          Economics, teaching Microeconomics at undergraduate level students.{" "}
        </p>
      </div>
    </BasicCard>
  );
};

export default Teaching;
