import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (event: React.FormEvent) => void;
  values: { name: string; email: string; message: string };
}

export const ContactForm = ({
  handleChange,
  handleSubmit,
  values,
}: ContactFormProps) => {
  return (
    <form
      className="w-[80%] mx-auto bg-white p-8 my-16"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={values.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button className="bg-[var(--teal)] rounded-full px-8" type="submit">
          Send
        </Button>
      </div>
    </form>
  );
};
