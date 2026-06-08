"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { toast } from "sonner";
import { useState } from "react";
import { deletePost } from "@/app/actions/posts";

export default function DeletePostDialog({ id }: { id: number }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);
    const result = await deletePost(id);
    if (result.success) {
      toast.success("Пост удалён");
      setOpen(false);
    } else {
      toast.error("Ошибка удаления");
    }
    setLoading(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>Удалить</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Удалить пост</DialogTitle>
          <DialogDescription>
            Вы уверены, что хотите удалить пост? Это действие нельзя отменить.
          </DialogDescription>
        </DialogHeader>
        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Удаление..." : "Удалить пост"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
