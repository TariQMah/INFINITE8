import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const percentage = (
  total: string | undefined,
  gain: string | undefined
) => {
  const totalXpNum = total ? parseInt(total.replace(/,/g, ""), 10) : 0;
  const gainXpNum = gain ? parseInt(gain.replace(/,/g, ""), 10) : 0;

  const percentage = (gainXpNum / totalXpNum) * 100;

  return Math.min(percentage, 100);
};
