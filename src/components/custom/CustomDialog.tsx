
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import React, { createElement } from "react";

interface CustomDialogProps {
  children?: React.ReactNode;
  buttonTitle?: string;
  icon?: React.ComponentType;
  title?: string;
  description?: string;
}

export const CustomDialog = ({
  children,
  buttonTitle = "Button title",
  icon,
  title = "Title",
  description = "description",
}: CustomDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          {icon && createElement(icon)} {buttonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-0">
          {title && <DialogTitle className="text-2xl">{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
};
