type Props = {
  title: string;
  description: string;
  onOpen?: () => void;
};

export default function ProjectCard({ title, description, onOpen }: Props) {
  return (
    <article className="card hover:shadow-md cursor-pointer transition transform hover:-translate-y-1" onClick={onOpen}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{description}</p>
      <div className="mt-3">
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpen && onOpen();
          }}
        >
          View details
        </button>
      </div>
    </article>
  );
}
