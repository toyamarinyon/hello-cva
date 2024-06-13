import type { FC } from "react";
import { ButtonWithoutCva } from "./components/button-without-cva";
import { ButtonWithCva } from "./components/button-with-cva";

export const App: FC = () => (
  <div className="flex flex-col gap-4">
    <div>
      <ButtonWithoutCva variant="primary">Primary</ButtonWithoutCva>
    </div>
    <div>
      <ButtonWithoutCva variant="secondary">Secondary</ButtonWithoutCva>
    </div>
    <div>
      <ButtonWithCva variant="primary">Primary</ButtonWithCva>
    </div>
    <div>
      <ButtonWithCva variant="secondary">Secondary</ButtonWithCva>
    </div>
  </div>
);
