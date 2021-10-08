import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-nextjs-toast";

function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        toast.notify("Your message has been sent!", {
          duration: 4,
          type: "success",
        });
      } else {
        toast.notify("Your message could not be send.", {
          duration: 4,
          type: "error",
        });
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="contactForm"
      className="flex flex-col space-y-5 rounded w-[90%] bg-white text-gray-800 lg:w-1/2 md:w-3/4 p-5 mt-5 mb-10 text-sm"
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
        className="bg-gray-800 text-white rounded py-2 px-4 w-min self-end active:scale-90"
        type="submit"
      >
        Submit
      </button>
      <ToastContainer align="left" />
    </form>
  );
}

export default EmailForm;
