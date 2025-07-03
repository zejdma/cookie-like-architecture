import type { ReactNode } from "react";

export default function FormSectionInpus({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex grid-cols-4 flex-col sm:grid md:col-span-2">
      <div className="col-span-4 flex flex-grow flex-col space-y-6 rounded-md border border-gray-100 bg-white p-4 dark:border-gray-900 dark:bg-gray-800">
        {children}
      </div>
    </div>
  );
}
