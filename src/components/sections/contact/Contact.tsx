import { useState } from "react";
import { TitleBlock } from "./TitleBlock";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { name, email, message } = values;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:jennifer.s.lesmana@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="">
      <TitleBlock />
      <ContactForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
      />
    </section>
  );
};
