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
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
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
  tokenId: string;
  currentTitle: string;
  currentDescription: string;
  onUpdated: (title: string, description: string) => void;
}

const VideoMetadataDialog = ({
  button,
  tokenId,
  currentTitle,
  currentDescription,
  onUpdated,
}: MintDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tx, setTx] = useState<TransactionResult>();
  const { contract } = useContract(Contract.address!);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleUpdate = useCallback(async () => {
    setLoading(true);
    contract!
      .call("setVideoAssetMetadata", [tokenId, title, description])
      .then((tx: any) => {
        setTx(tx);
        setOpen(false);
        onUpdated(title, description);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [contract, title, description]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Define a new title and description for your video
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-2">
            Set a title and description for your video. This will be publicly
            available on the blockchain.
            <br />
            <input
              disabled={loading}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
              placeholder={currentTitle}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              disabled={loading}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
              placeholder={currentDescription}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {!loading && (
            <DialogClose>
              <Button variant="outline">{tx ? "Done" : "Cancel"}</Button>
            </DialogClose>
          )}
          {!tx && (
            <Button disabled={loading} onClick={handleUpdate}>
              {loading ? <span className="animate-pulse">Updating...</span> : "Update"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VideoMetadataDialog;
