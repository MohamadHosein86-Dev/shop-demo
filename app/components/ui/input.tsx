"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

const inputVariants = cva("flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50", {
  variants: {
    variant: {
      default: "border-gray-300",
      error: "border-red-500 focus:ring-red-500"
    },
    size: {
      default: "h-10",
      sm: "h-9 px-3",
      lg: "h-11 px-4"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, variant, size, error, ...props }, ref) => {
  return (
    <div className="w-full">
      <input className={cn(inputVariants({ variant: error ? "error" : variant, size, className }))} ref={ref} {...props} />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export { Input, inputVariants };
