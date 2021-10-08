import EmailForm from "./EmailForm";

function Contact({ id }) {
  return (
    <div id={id} className="flex flex-col justify-center items-center w-full">
      <div className="text-center flex flex-col justify-center items-center space-y-3 px-5">
        <p className="text-3xl">CONTACT</p>
        <p className="text-gray-300">
          Feel free to send me a message by submitting the form below.
        </p>
      </div>
      <EmailForm />
    </div>
  );
}

export default Contact;
