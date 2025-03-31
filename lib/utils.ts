import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface CnInputs extends Array<ClassValue> {}

export function cn(...inputs: CnInputs): string {
  return twMerge(clsx(inputs));
}
