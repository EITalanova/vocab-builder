import cn from "classnames";

import style from "./Button.module.scss";

interface IButton {
  variant: 'white' | 'green';
  text: string;
  type: 'submit' | 'button';
}

export const Button: React.FC<IButton> = ({ variant, text, type }) => {
  return (
    <button className={cn(style.btn, style[variant])} type={type}>{text}</button>
  );
};
