import { v4 as uuidv4 } from "uuid";

export interface IntUseIdGeneratorHook {
  (): string;
}

const useIdGenerator: IntUseIdGeneratorHook = () => {
  return uuidv4();
};

export default useIdGenerator;
