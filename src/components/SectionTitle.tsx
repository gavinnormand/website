function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <p className="text-accent/50 font-mono text-sm">{title}</p>
      <div className="bg-accent/35 h-px w-fit flex-1" />
    </div>
  );
}

export default SectionTitle;
