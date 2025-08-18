export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container space-y-8">
        <header>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-2xl mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
