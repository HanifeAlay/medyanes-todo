/*
 Bu sayfa uygulamanın ana ekranıdır.
 Sayfa açıldığında todos listesini backendden çeker.
 TodoForm ve TodoList componentlerini render eder.
*/

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { useTodoStore } from "@/store/todoStore";
import { useEffect } from "react";

export default function Home() {
  const fetchTodos = useTodoStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-200 via-pink-100 to-amber-100 p-6">
      {/* Arka plan: yumuşak blur ışıklar (background ambience) */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/25 blur-3xl" />

      {/* İçerik alanı */}
      <div className="mx-auto max-w-3xl relative">
        {/* Kartı daha belirgin yapan halo */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[420px] w-[820px] rounded-[56px] bg-white/20 blur-2xl" />
        </div>

        {/* Ana kart */}
        <section
          className="
            relative
            w-full
            rounded-3xl
            bg-white/70 backdrop-blur-xl
            border border-white/70
            ring-1 ring-black/5
            shadow-[0_25px_80px_-25px_rgba(0,0,0,0.35)]
            p-6 sm:p-10
          "
        >
          {/* Başlık alanı */}
          <header className="mb-6">
            <p className="text-sm tracking-wide text-amber-900/60">
              Medyanes 360 
            </p>

            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-amber-950 flex flex-col items-center text-center">
              ToDo List
            </h1>
          </header>

          {/* Form + Liste: senin katman yapın aynı kaldı */}
          <div className="flex flex-col gap-6">
            <TodoForm />
            <TodoList />
          </div>
        </section>
      </div>
    </main>
  );
}