/*
  TodoItem:
  - Tek bir todo kartını temsil eder.
  - Status toggle ve delete işlemlerini store üzerinden yapar.
*/

import { useTodoStore } from "@/store/todoStore";

export default function TodoItem({ todo }) {
  const toggleTodoStatus = useTodoStore((state) => state.toggleTodoStatus);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  // completed durumuna göre kartın tonu değişsin
  const cardBase =
    "rounded-2xl border border-white/70 ring-1 ring-black/5 bg-white/70 backdrop-blur-xl px-4 py-4 shadow-sm flex items-start justify-between gap-4";
  const cardDone = "opacity-70";
  const titleBase = "font-semibold text-amber-950";
  const titleDone = "line-through text-amber-900/40";

  return (
    <div className={`${cardBase} ${todo.status ? cardDone : ""}`}>
      {/* Sol taraf: içerik */}
      <div className="min-w-0">
        <h3 className={`${titleBase} ${todo.status ? titleDone : ""}`}>
          {/* todo tamamlandıysa üstünü çiz */}
          {todo.title}
        </h3>

        {/* Açıklama boşsa hiç göstermeyelim */}
        {todo.description ? (
          <p className={`mt-1 text-sm ${todo.status ? "text-amber-900/40" : "text-amber-900/70"}`}>
            {todo.description}
          </p>
        ) : null}
      </div>

      {/* Sağ taraf: aksiyonlar */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Status Toggle */}
      <input
        type="checkbox"
        checked={!!todo.status}
        onChange={() => toggleTodoStatus(todo.id, todo.status)}
        className="h-5 w-5 accent-rose-600 cursor-pointer"
      />

        {/* Delete */}
        <button
          onClick={() => removeTodo(todo.id)}
          className="
            rounded-xl
            bg-rose-100/70
            border border-rose-200
            px-3 py-2
            text-sm font-medium text-rose-900
            hover:bg-rose-200/70
            active:scale-[0.99]
            transition
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
}