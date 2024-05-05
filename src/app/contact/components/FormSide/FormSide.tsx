import Form from "./Form";

const FormSide = () => {
  return (
    <div className="to-dark-purple rounded-lg bg-gradient-to-br from-off p-3 md:p-10">
      <div className="mb-4 text-xl font-medium md:text-4xl">
        Send us a message
      </div>
      <p className="mb-4 text-sm text-zinc-400 sm:text-base">
        Please feel free to send us any questions, feedback or suggestions you
        might have.
      </p>
      <Form />
    </div>
  );
};

export default FormSide;
