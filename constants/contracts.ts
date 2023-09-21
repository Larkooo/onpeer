import { Chain, Mumbai } from "@thirdweb-dev/chains";

interface Contract {
    chain: Chain;
    address: string;
    blockNumber: number;
}

const contractMumbai: Contract = {
    chain: Mumbai,
    address: "0x063205D43B48B968864d3325c7E1e09794b679eB",
    blockNumber: 40149598
}

const Contracts: Record<string, Contract> = {
    "0x063205D43B48B968864d3325c7E1e09794b679eB": contractMumbai
}

export const Contract = Contracts[process.env.ONPEER_CONTRACT_ADDRESS!];

export default Contracts;