"use client";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./ui/button";

const SubmitButton = ({ children, ...props }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button color="blue" type="submit" aria-disabled={pending} {...props}>
      {pending ? <span className="animate-pulse">Submitting</span> : children}
    </Button>
  );
};

export default SubmitButton;