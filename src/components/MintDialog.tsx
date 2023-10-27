import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { useContract } from "@thirdweb-dev/react";
import {
  SignedPayload721WithQuantitySignature,
  TransactionResult,
} from "@thirdweb-dev/sdk";
import { Contract } from "constants/contracts";
import { ReactNode, useCallback, useState } from "react";
import { formatHash } from "src/lib/format";

interface MintDialogProps {
  button: ReactNode;
  id: string;
  signature: SignedPayload721WithQuantitySignature;
  onMinted?: (title: string, description: string, txHash: string) => void;
}

const MintDialog = ({ id, button, signature, onMinted }: MintDialogProps) => {
  const [open, setOpen] = useState(false);
  const [minting, setMinting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mintTx, setMintTx] = useState<TransactionResult>();
  const { contract } = useContract(Contract.address!);

  const handleMint = useCallback(async () => {
    setMinting(true);

    // we prepare the mint txn
    // and modify it to use our own implementation
    const mint = await contract!.erc721.signature.mint.prepare(signature);

    // inject video metadata args
    const args = mint.getArgs();
    mint.setArgs([args[0], { title, description }, args[1]]);
    // use our mint implementation
    (mint as any).method = "mint";

    // execute the mint txn
    mint
      .execute()
      .then((tx: any) => {
        setMintTx(tx);
        setMinting(false);
        onMinted?.(title, description, tx.receipt.transactionHash);
      })
      .catch((e) => {
        setMinting(false);
      });
  }, [contract, title, description]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mintTx ? "Your video was minted!" : "Let's mint your video"}
          </DialogTitle>
          <DialogDescription>
            {mintTx
              ? "It might take some time for your mint transaction to reflect on your video. Don't try minting it again. You can now set a title and description to your video and share it with the world to interact with."
              : "Minting your video will make it persistent and available on the blockchain for you and others to interact with."}
            <br />
            <br />
            {mintTx ? (
              <div className="text-xs flex flex-col">
                <span>
                  Your video was successfully minted at transaction{" "}
                  <a
                    className="flex flex-row gap-1 hover:underline"
                    href={`${Contract.chain.explorers?.[0].url}/tx/${mintTx.receipt.transactionHash}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">
                      {formatHash(mintTx.receipt.transactionHash)}
                    </span>
                    <ExternalLinkIcon />
                  </a>
                </span>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <input
                  disabled={minting}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  disabled={minting}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="items-center">
          <div className="flex-grow text-xs text-gray-400">
            Taking into account your video size and length, the calculated cost
            to mint your video is <span className="bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">
            {Number.parseFloat(signature.payload.price).toFixed(3)}{" "}
            {Contract.chain.nativeCurrency.symbol}
            </span>
          </div>
          <DialogClose>
            <Button variant="outline">{mintTx ? "Done" : "Cancel"}</Button>
          </DialogClose>
          {!mintTx && (
            <Button disabled={minting} onClick={handleMint}>
              {minting ? "Minting..." : "Mint"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MintDialog;
