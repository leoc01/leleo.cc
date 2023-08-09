import mailIcon from "../public/mail.png";
import Link from "next/link";
import Image from "next/image";

function Maildiv() {
  return (
    <div className="grid justify-center md:place-items-center my-6">
      <Link
        href="mailto:leonardocampetti@gmail.com"
        className="grid grid-cols-[auto_auto] gap-3 items-center text-lg md:text-xl px-4 md:px-6 py-4 rounded-xl my-4 max-w-sm text-white bg-green-700"
      >
        <div className="relative">
          <Image
            src={mailIcon}
            height={32}
            width={32}
            target="_blank"
            className="object-contain"
            alt="ícone de email"
          />
        </div>
        <div>leonardocampetti@gmail.com</div>
      </Link>
    </div>
  );
}

export default Maildiv;
