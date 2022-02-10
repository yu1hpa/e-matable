import type { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: FC<InputProps> = ({ ...props }) => (
  <input
    className="h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none shadow-md"
    {...props}
  />
);

export default Input;
