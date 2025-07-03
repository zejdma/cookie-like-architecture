export default function FormSectionDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="text-base font-semibold leading-7">{title}</h2>
      <p className="text-muted-foreground text-sm leading-6">
        {description}
      </p>
    </div>
  );
}
