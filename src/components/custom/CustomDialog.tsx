
import { X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { createElement } from "react";

interface CustomDialogProps {
  children?: React.ReactNode;
  buttonTitle?: string;
  icon?: React.ComponentType;
  title?: string;
  description?: string;
isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomDialog = ({
  children,
  buttonTitle = "Button title",
  icon,
  title = "Title",
  description = "description",
  isOpen= false,
  setIsOpen,
}: CustomDialogProps) => {


  return (
    <Dialog open={isOpen} >
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          {icon && createElement(icon)} {buttonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent  showCloseButton={false}>
        <DialogHeader className="gap-0">
          {title && <DialogTitle className="text-2xl">{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
          <DialogClose asChild>
            <Button
              variant="ghost"
              className="absolute right-4 top-4 opacity-70 hover:opacity-100 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X className="size-5" />
            </Button>
          </DialogClose>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
};
