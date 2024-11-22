const CV = () => {
  return (
    <div className="w-full h-full flex flex-col items-center p-20">
      <p className="text-6xl text-secondary font-semibold">Curriculum Vitae</p>
      <div className="flex flex-col my-20 gap-10">
        <p>
          Here you will find my CV, including my education, experience, and
          skills.
        </p>
        <p>
          Feel free to contact me if you need any assistance with your job
          application.
        </p>
        <a href="/assets/files/Claudia Ranocchia CV.pdf" target="_blank">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default CV;
