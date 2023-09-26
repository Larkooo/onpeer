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
import { useContract } from "@thirdweb-dev/react";
import {
  SignedPayload721WithQuantitySignature,
  TransactionResult,
} from "@thirdweb-dev/sdk";
import { Contract } from "constants/contracts";
import { ReactNode, useCallback, useState } from "react";

interface MintDialogProps {
  button: ReactNode;
  id: string;
  signature: SignedPayload721WithQuantitySignature;
}

const MintDialog = ({ id, button, signature }: MintDialogProps) => {
  const [open, setOpen] = useState(false);
  const [minting, setMinting] = useState(false);
  const [mintTx, setMintTx] = useState<TransactionResult>();
  const { contract } = useContract(Contract.address!);

  console.log(signature);
  const handleMint = useCallback(async () => {
    setMinting(true);
    contract!.erc721.signature
      .mint(signature)
      .then((tx) => {
        setMintTx(tx);
        setMinting(false);
      })
      .catch((e) => {
        setMinting(false);
      });
  }, [contract]);

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
            {mintTx && (
              <div className="text-xs flex flex-col">
                <span>
                  Your transaction hash is {mintTx.receipt.transactionHash}
                </span>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
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
