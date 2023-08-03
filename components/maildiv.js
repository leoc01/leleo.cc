import mailIcon from "../public/mail.png";
import Link from "next/link";
import Image from "next/image";

function Maildiv() {
  return (
    <div>
      <Link
        href="mailto:leonardocampetti@gmail.com"
        className="grid grid-cols-[auto_auto] items-center my-4"
      >
        <div className="relative h-8">
          <Image
            src={mailIcon}
            fill
            target="_blank"
            className="p-2 rounded-2xl object-contain"
          />
        </div>
        <p className="text-base text-gray-900">leonardocampetti@gmail.com</p>
      </Link>
    </div>
  );
}

export default Maildiv;
