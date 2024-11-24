import BasicCard from "../../components/BasicCard/BasicCard";

const Teaching = () => {
  return (
    <BasicCard>
      <p className="text-6xl text-secondary font-semibold">Teaching</p>
      <div className="flex flex-col my-20 gap-10 text-primary text-xl">
        <p className="text-secondary font-semibold text-2xl sm:text-3xl md:text-4xl">
          Teaching associate collaborator Universidad Comillas de Madrid
        </p>
        <p className="my-10 text-base sm:text-lg md:text-xl text-primary">
          Professor at Universidad de Comillas de Madrid at the faculty of
          Economics, teaching Microeconomics at undergraduate level students.{" "}
        </p>
      </div>
    </BasicCard>
  );
};

export default Teaching;
