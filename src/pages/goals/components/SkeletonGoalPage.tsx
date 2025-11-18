import { Skeleton } from '@/components/ui/skeleton'


export const SkeletonGoalPage = () => {
  return (
   <div className="flex flex-col gap-5 ">
         <Skeleton className="h-9 w-12 rounded-md ms-auto" />
 
         <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-4  w-full">
           {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map((_, index) => (
             <Skeleton key={index} className="h-[150px] w-full rounded-2xl" />
           ))}
         </div>
 
         <div className=" flex gap-4 justify-between w-full ">
           <Skeleton className="h-[35px] w-[150px] rounded-md " />
           <div className="  flex gap-4">
           <Skeleton className="h-[35px] w-[150px] rounded-md " />
           <Skeleton className="h-[35px] w-[150px] rounded-md " />
 
           </div>
         </div>
       </div>
  )
}
