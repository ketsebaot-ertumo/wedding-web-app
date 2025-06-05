// // components/shared/Loader.tsx

import { cn } from "@/lib/utils"; // optional, if you have a `cn` util
import { RefreshCcw } from "lucide-react";


export const Loader = ({ className }) => {
  return (
    <div className={cn("h-[70vh] flex items-center justify-center", className)}>
      <RefreshCcw className="h-6 w-6 animate-spin" />
    </div>
  );
};
