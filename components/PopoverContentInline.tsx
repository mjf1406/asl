// components/ui/PopoverContentInline.tsx

"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils"; // Ensure this utility is correctly implemented

interface PopoverContentInlineProps
    extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
    foo?: boolean;
}

const PopoverContentInline = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Content>,
    PopoverContentInlineProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
            "z-[1000] w-72 rounded-md border bg-white p-4 text-black shadow-md outline-none", // Increased z-index to 1000
            className
        )}
        {...props}
    />
));

PopoverContentInline.displayName = PopoverPrimitive.Content.displayName;

export default PopoverContentInline;
