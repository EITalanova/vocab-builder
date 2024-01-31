import cn from "classnames";
import Image from "../../../../node_modules/next/image";
import Link from "../../../../node_modules/next/link";

import style from "./Button.module.scss";

interface ILogo {
  // variant: 'white' | 'green';
  // text: string;
  // type: 'submit' | 'button';
}

export const Logo: React.FC<ILogo> = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src={"../../assets/svg/logo.svg"}
          alt="logo"
          width={40}
          height={40}
        />
        VocabBuilder
      </Link>
    </div>
  );
};
