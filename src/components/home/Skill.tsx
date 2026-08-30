function Skill({ skill }: { skill: string }) {
  return (
    <div className="bg-secondary-text/10 text-secondary-text/90 w-fit rounded-md px-2 py-1 font-mono text-xs whitespace-nowrap">
      {skill}
    </div>
  );
}

export default Skill;
