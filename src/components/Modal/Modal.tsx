import cn from "classnames";
import Image from "../../../../node_modules/next/image";
import Link from "../../../../node_modules/next/link";

import style from "./Button.module.scss";

interface IModal {
  children: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({ children }) => {
  return (
    <Link href="/">
      {children}
      <Image
        src={"../../assets/svg/close.svg"}
        alt="close"
        width={40}
        height={40}
      />
    </Link>
  );
};
