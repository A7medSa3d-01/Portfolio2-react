import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzzpzrvv");
  return (
    <div className="contact">
      <h1 className="title">
        <span className="icon-email"></span>
        Contact us
      </h1>
      <p>
        Contact us for more information and grt notified when i publish
        something nwe
      </p>
      <div style={{ justifyContent: "space-between" }} className="sides flex">
        <form onSubmit={handleSubmit} action="">
          <div className="flex">
            <label htmlFor="email">Email Adress:</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email Adress"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "25px" }}>
            <label htmlFor="message">Your message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 50, left: 0 }}
                animationData={doneAnimation}
              />
              Message sent successfully!
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
          className="contactAnimation"
            style={{ height: 350, left: 0 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </div>
  );
}
