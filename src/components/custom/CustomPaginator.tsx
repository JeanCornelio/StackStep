import { Button } from "../ui/button";
import { Form } from "../ui/form";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { CustomSelect } from "./CustomSelect";
import { useForm } from "react-hook-form";

interface CustomPaginatorProps {
  totalItems: number;
  size: number;
  page: number;
  onParamsChange: (page: number, size: number) => void;

}

export const CustomPaginator = ({
  totalItems,
  size,
  page,
  onParamsChange
}: CustomPaginatorProps) => {

    const form = useForm({
      defaultValues: {
        size: String(size),
      },
    });

    

    
  return (
    <Pagination>
      <PaginationContent className=" justify-between w-full">
        
        <div>
          <span className="flex items-center gap-1">
            Page <strong>{page}</strong> of{" "}
            <strong>{Math.ceil(totalItems / size)}</strong>
          </span>
        </div>
        <div className=" flex items-center gap-4">

            <Form {...form}  > 
            <CustomSelect
                control={form.control}
                
                placeholder="Select size"
                name="size"
                data={[
                  { label: "5", value: "5" },
                  { label: "10", value: "10" },
                  { label: "20", value: "20" },
                  { label: "50", value: "50" },
                ]}
              
                onChange={(value) => {
                    onParamsChange(1, Number(value));
                }}
            />

            </Form>
          
          <div className="gap-2 flex">
          <PaginationItem>
            <Button onClick={() => onParamsChange(1, size)} disabled={page === 1}>
              <ChevronsLeft />
            </Button>
          </PaginationItem>

          <PaginationItem>
            <Button
              onClick={() => onParamsChange(page - 1, size)}
              disabled={page === 1}
            >
              <ChevronLeft />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              onClick={() => onParamsChange(page + 1, size)}
              disabled={page >= Math.ceil(totalItems / size)}
            >
              <ChevronRight />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              onClick={() => onParamsChange(Math.ceil(totalItems / size), size)}
              disabled={page >= Math.ceil(totalItems / size)}
            >
              <ChevronsRight />
            </Button>
          </PaginationItem>
        </div>
        </div>
        
      </PaginationContent>
    </Pagination>
  );
};
