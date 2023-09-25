import { Chain, Mumbai } from "@thirdweb-dev/chains";

interface Contract {
  chain: Chain;
  address: string;
  blockNumber: number;
}

const contractMumbai: Contract = {
  chain: Mumbai,
  address: "0xE3a532CFB1519941FB9A2C46b7d535FA19c10aaF",
  blockNumber: 40505728,
};

const Contracts: Record<string, Contract> = {
  "0xE3a532CFB1519941FB9A2C46b7d535FA19c10aaF": contractMumbai,
};

export const Contract =
  Contracts[process.env.NEXT_PUBLIC_ONPEER_CONTRACT_ADDRESS!];

export default Contracts;
