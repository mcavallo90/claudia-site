const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col items-center p-20">
      <p className="text-6xl text-secondary font-semibold">Contact</p>
      <div className="flex flex-col my-20 gap-10 text-xl">
        <a href="https://www.ucm.es/" target="_blank">
          <p className="text-primary underline">Universidad Complutense de Madrid</p>
        </a>
        <p className="text-primary">
          <span className="font-bold">Email:</span> claudiaranocchia@gmail.com
        </p>
        <p className="text-primary">
          <span className="font-bold">Phone:</span> +34 33333333333 - +39
          33333333333
        </p>
        <p className="text-primary">
          <span className="font-bold">References:</span> Francisco , Carmen, 
        </p>
      </div>
    </div>
  );
};
export default Contact;
