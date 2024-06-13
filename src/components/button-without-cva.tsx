import type { FC, PropsWithChildren } from "react";

type Props = {
	variant: "primary" | "secondary";
};
export const ButtonWithoutCva: FC<PropsWithChildren<Props>> = ({
	variant,
	children,
}) => (
	<button
		type="button"
		className={`px-2 py-1 rounded text-white ${variant === "primary" ? "bg-indigo-500" : variant === "secondary" ? "bg-gray-600" : ""}`}
	>
		{children}
	</button>
);
