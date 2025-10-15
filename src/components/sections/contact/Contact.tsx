import { useState } from "react";
import { TitleBlock } from "./TitleBlock";
import { ContactForm } from "./ContactForm";

export interface ContactProps {
  className?: string;
}

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
    // Handle form submission logic here
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
