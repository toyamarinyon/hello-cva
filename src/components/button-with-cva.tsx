import { type VariantProps, cva } from "class-variance-authority";
import type { FC, PropsWithChildren } from "react";

const buttonVariant = cva("px-2 py-1 rounded text-white ", {
  variants: {
    variant: {
      primary: "bg-indigo-500",
      secondary: "bg-gray-600",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
type Props = VariantProps<typeof buttonVariant>;
export const ButtonWithCva: FC<PropsWithChildren<Props>> = ({
  variant,
  children,
}) => (
  <button type="button" className={buttonVariant({ variant })}>
    {children}
  </button>
);
