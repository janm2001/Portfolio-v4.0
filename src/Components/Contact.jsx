import React from "react";
import { TextField, Button } from "@mui/material";
import styles from "./Contact.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7k7tdgq",
        "template_t1wzlpb",
        form.current,
        "tj_IhjKEWOhHvNAEQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div id="contact" className={styles.container}>
        <div className={styles.aboutMeInfo}>
          <h1>Contact</h1>
          <div className={styles.headlineBorder}></div>
          <p>Send me a message</p>
        </div>
        <div className={styles.contactForm}>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              label="First name"
              name="firstName"
              placeholder="Enter first name"
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
              fullWidth
            />
            <br />
            <br />
            <TextField
              label="Last name"
              name="lastName"
              placeholder="Enter last name"
              variant="outlined"
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
              fullWidth
            />
            <br />
            <br />
            <TextField
              label="Email"
              placeholder="Enter your Email"
              variant="outlined"
              name="email"
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
              fullWidth
            />

            <br />
            <br />
            <TextField
              label="Message"
              placeholder="Enter a Message"
              variant="outlined"
              name="message"
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
              fullWidth
            />
            <br />
            <br />
            <Button fullWidth variant="contained" color="error" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Contact;
