import { ABeeZee } from "next/font/google";

const abeezeeN = ABeeZee({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

const abeezeeI = ABeeZee({
  style: "italic",
  subsets: ["latin"],
  weight: "400",
});

export { abeezeeN, abeezeeI };
