import type { KeyboardEvent } from "react";

/** Makes a non-button element keyboard-accessible (Enter / Space) alongside click. */
export const buttonProps = (onClick: () => void, label?: string) => ({
  role: "button",
  tabIndex: 0,
  "aria-label": label,
  onClick,
  onKeyDown: (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  },
});
