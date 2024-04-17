import Form from "./Form";

const FormSide = () => {
  return (
    <div className="to-dark-purple rounded-lg bg-gradient-to-br from-off p-10">
      <div className="mb-4 text-4xl font-medium">Send us a message</div>
      <p className="mb-4 text-zinc-400">
        Please feel free to send us any questions, feedback or suggestions you
        might have.
      </p>
      <Form />
    </div>
  );
};

export default FormSide;
