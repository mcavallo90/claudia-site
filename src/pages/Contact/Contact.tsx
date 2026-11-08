import BasicCard from "../../components/BasicCard/BasicCard";

const Contact = () => {
  return (
    <BasicCard>
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center gap-8 sm:gap-12 py-6 sm:py-10">
        <h1 className="text-3xl sm:text-5xl text-secondary font-semibold">
          Contact
        </h1>
        <a
          href="https://www.tilburguniversity.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl text-primary underline underline-offset-4"
        >
          Tilburg University
        </a>
        <p className="text-base sm:text-xl text-primary max-w-full">
          <span className="font-semibold">Email</span>
          <a
            href="mailto:c.ranocchia@tilburguniversity.edu"
            className="mt-2 block break-all underline underline-offset-4"
          >
            c.ranocchia@tilburguniversity.edu
          </a>
        </p>
      </div>
    </BasicCard>
  );
};
export default Contact;
