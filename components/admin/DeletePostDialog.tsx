"use client";

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
import { deleteCourse } from "@/app/actions/courses";

interface Props {
  id: number;
  type: "post" | "course";
}

export default function DeleteDialog({ id, type }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const action = type === "post" ? deletePost : deleteCourse;

  async function handleDelete() {
    setLoading(true);
    const result = await action(id);
    if (result.success) {
      toast.success(type === "post" ? "Пост удалён" : "Курс удален");
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
          <DialogTitle>
            {type === "post" ? "Удалить пост" : "Удалить курс"}
          </DialogTitle>
          <DialogDescription>
            Вы уверены, что хотите удалить {type === "post" ? "пост" : "курс"}?
            Это действие нельзя отменить.
          </DialogDescription>
        </DialogHeader>
        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={loading}
          className="w-full"
        >
          {loading
            ? "Удаление..."
            : `Удалить ${type === "post" ? "пост" : "курс"}`}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
