/*
  TodoList:
  - Zustand store'dan todos listesini alır.
  - Her todo için TodoItem render eder.
  - Loading / error / empty state durumlarını gösterir.
*/

import { useTodoStore } from "@/store/todoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, loading, error } = useTodoStore();

  // Tailwind class'larını değişkene alıyoruz -> okunabilirlik artsın
  const card =
    "w-full rounded-2xl bg-white/65 backdrop-blur-xl border border-white/70 ring-1 ring-black/5 shadow-sm p-5 sm:p-6";
  const infoBox =
    "mt-4 w-full rounded-xl bg-white/60 border border-white/70 px-4 py-3 text-amber-900/80";
  const errorBox =
    "mt-4 w-full rounded-xl bg-rose-100/70 border border-rose-200 px-4 py-3 text-rose-900";

  if (loading) return <p className={infoBox}>Loading todos...</p>;
  if (error) return <p className={errorBox}>{error}</p>;

  return (
    <section className={card}>
      {/* Başlık + sayaç */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-amber-950">Todos</h2>

        <span className="text-xs text-amber-900/70 rounded-full bg-white/70 border border-white/70 px-3 py-1">
          {todos.length} item
        </span>
      </div>

      {/* Empty state */}
      {!todos.length ? (
        <p className="mt-4 text-sm text-amber-900/80">
          Henüz todo yok. Yukarıdan ekleyebilirsin ✨
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </section>
  );
}