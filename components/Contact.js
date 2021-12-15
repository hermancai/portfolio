import EmailForm from "./EmailForm";

function Contact({ id }) {
  return (
    <div id={id} className="flex justify-center items-center w-full mb-10 pt-[100px]">
      <div className="flex flex-col w-4/5 md:w-1/2 space-y-4">
        <div className="flex flex-col justify-center items-center text-center space-y-3 px-5">
          <p className="text-2xl underline underline-offset-8 decoration-4 decoration-red-500">Contact</p>
          <p className="text-gray-300">Feel free to send me a message by submitting the form below.</p>
        </div>
        <EmailForm />
      </div>
    </div>
  );
}

export default Contact;
