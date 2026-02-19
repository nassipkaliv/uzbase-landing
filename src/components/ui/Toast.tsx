import { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-toast-in fixed bottom-6 right-6 z-50 bg-surface border border-accent/20 text-foreground px-5 py-3 rounded-lg glow-accent-sm flex items-center gap-3"
    >
      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
