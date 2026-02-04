import Link from "next/link";
import { updates, type UpdateItem } from "@/lib/updates";

export function LatestUpdates() {
  // Ordenar por data (recente para antigo) e pegar os 5 primeiros
  const recentUpdates = [...updates]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-medium text-[var(--foreground)] tracking-tight">
        Últimos updates
      </h2>

      <ul className="flex flex-col gap-4">
        {recentUpdates.map((item) => (
          <li key={item.slug} className="group">
            <Link 
              href={item.slug}
              className="block space-y-1.5 p-3 -mx-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider font-medium">
                <UpdateTypeBadge type={item.type} />
                <span className="text-zinc-400 dark:text-zinc-500">•</span>
                <time 
                  dateTime={item.date} 
                  className="text-zinc-500 dark:text-zinc-400"
                >
                  {new Date(item.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                  })}
                </time>
              </div>

              <span className="block text-base text-zinc-700 dark:text-zinc-300 group-hover:text-[var(--foreground)] transition-colors">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function UpdateTypeBadge({ type }: { type: UpdateItem["type"] }) {
  const labels = {
    new: "Novo",
    update: "Atualização",
    revision: "Revisão",
  };

  const colors = {
    new: "text-emerald-600 dark:text-emerald-500",
    update: "text-blue-600 dark:text-blue-500",
    revision: "text-amber-600 dark:text-amber-500",
  };

  return (
    <span className={colors[type]}>
      {labels[type]}
    </span>
  );
}
