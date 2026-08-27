function PageLink({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <p className="text-accent/40 text-sm">{title}</p>
      <div className="bg-accent/40 h-px w-fit flex-1" />
    </div>
  );
}

export default PageLink;
