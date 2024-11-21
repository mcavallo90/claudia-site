const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center p-20">
      <p className="text-4xl text-secondary">Home</p>
      <div className="flex my-20 gap-10">
        <img src="/assets/icons/person-dark.png" alt="" className="w-20 h-20"/>
        <div className="flex flex-col">
            <p className="text-xl text-secondary">Claudia Ranocchia</p>
            <p className="text-sm text-primary">Professor</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
