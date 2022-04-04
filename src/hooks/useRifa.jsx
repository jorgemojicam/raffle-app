import { useContext } from "react";
import { RifaContext } from "../providers/RifaProvider";

export default function useRifa() {
  return useContext(RifaContext);
}
