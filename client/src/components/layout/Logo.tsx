import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg 
      className={cn("w-10 h-10", className)}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M50 10C30 10 15 25 15 45C15 65 30 80 50 80C70 80 85 65 85 45C85 25 70 10 50 10Z" 
        fill="currentColor"
        opacity="0.2"
      />
      <path 
        d="M40 35C45 30 55 30 60 35C65 40 65 50 60 55C55 60 45 60 40 55C35 50 35 40 40 35Z" 
        fill="currentColor"
      />
      <path 
        d="M30 45C35 40 45 40 50 45C55 50 55 60 50 65C45 70 35 70 30 65C25 60 25 50 30 45Z" 
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}
