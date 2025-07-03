import type { ReactNode } from "react";
import FormSectionDescription from "./formSectionDescription";
import FormSectionInputs from "./formSectionInputs";

export default function FormSection({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 space-y-4 gap-x-8 pb-12 md:grid-cols-3">
      <FormSectionDescription
        title={title}
        description={description}
      />
      <FormSectionInputs>{children}</FormSectionInputs>
    </div>
  );
}
