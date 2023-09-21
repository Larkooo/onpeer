import { Chain, Mumbai } from "@thirdweb-dev/chains";

interface Contract {
  chain: Chain;
  address: string;
  blockNumber: number;
}

const contractMumbai: Contract = {
  chain: Mumbai,
  address: "0x93197192FDD5e708cb72b97652f2AAE00A44F4cB",
  blockNumber: 40359620,
};

const Contracts: Record<string, Contract> = {
  "0x93197192FDD5e708cb72b97652f2AAE00A44F4cB": contractMumbai,
};

export const Contract =
  Contracts[process.env.NEXT_PUBLIC_ONPEER_CONTRACT_ADDRESS!];

export default Contracts;
