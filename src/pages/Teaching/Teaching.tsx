import BasicCard from "../../components/BasicCard/BasicCard";

const Teaching = () => {
  return (
    <BasicCard>
      <p className="text-6xl text-secondary font-semibold">Teaching</p>
      <div className="flex flex-col my-20 text-primary text-xl justify-start">
        <p className="text-secondary font-semibold text-xl sm:text-xl md:text-2xl">
          Associate collaborator Universidad Comillas de Madrid (2022-2023)
        </p>
        <p className="my-5 text-base sm:text-lg md:text-xl text-primary">
          Professor at Universidad de Comillas de Madrid at the faculty of
          Economics, teaching Microeconomics at undergraduate level students.{" "}
        </p>
      </div>
    </BasicCard>
  );
};

export default Teaching;
