import { useForm } from "react-hook-form";
import { useState } from "react";
import Toast from "./Toast";

function EmailForm() {
  const [activeButton, setActiveButton] = useState(true);
  const [toasts, setToasts] = useState([]);

  const createToast = (toastComponent) => {
    setToasts([...toasts, toastComponent]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setActiveButton(false);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          console.log("Your email has been sent.");
          createToast(
            <Toast
              message="Your message has been sent."
              bgColor="bg-green-500"
              key={Date.now()}
            />
          );
        } else {
          console.log("Email sending error");
          createToast(
            <Toast
              message="Your message cannot be sent at this time."
              bgColor="bg-red-500"
              key={Date.now()}
            />
          );
        }
        setActiveButton(true);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contactForm"
        className="flex flex-col space-y-5 rounded bg-gray-900 text-white p-5 text-sm w-full"
      >
        <div className="formSection">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: "Please enter a name" })}
            className="formInput"
            type="text"
            placeholder="Enter Your Name"
          />

          {errors.name ? (
            <>
              {errors.name.type === "required" && (
                <p className="errorMessage">{errors.name.message}</p>
              )}
            </>
          ) : null}
        </div>

        <div className="formSection">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Please enter an email",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "The email is invalid",
              },
            })}
            className="formInput"
            type="text"
            placeholder="Enter Your Email"
          />
          {errors.email ? (
            <>
              {errors.email.type === "required" && (
                <p className="errorMessage">{errors.email.message}</p>
              )}
              {errors.email.type === "pattern" && (
                <p className="errorMessage">{errors.email.message}</p>
              )}
            </>
          ) : null}
        </div>

        <div className="formSection">
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message", { required: "Please enter a message" })}
            className="formInput overflow-auto"
            type="text"
            placeholder="Enter Your Message"
            rows="5"
          />
          {errors.message ? (
            <>
              {errors.message.type === "required" && (
                <p className="errorMessage">{errors.message.message}</p>
              )}
            </>
          ) : null}
        </div>

        <button
          className="flex justify-center border rounded py-2 px-4 w-24 self-end active:scale-90 outlineButton ease-in-out duration-200"
          type="submit"
          disabled={!activeButton}
        >
          {activeButton ? (
            <p className="font-semibold">Send</p>
          ) : (
            <div className="h-5 w-5 border-t-transparent rounded-full border-2 border-gray-300 animate-spin" />
          )}
        </button>
      </form>
      <div className="flex flex-col fixed bottom-4 left-4 z-10">
        {toasts.map((entry) => entry)}
      </div>
    </div>
  );
}

export default EmailForm;
