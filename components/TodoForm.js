// TodoForm: Kullanıcıdan yeni todo bilgileri alır
// Submit olunca Zustand store içindeki addTodo fonksiyonunu çağırır.

import { useTodoStore } from "@/store/todoStore";
import { useState } from "react";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Stordan addTodo fonksiyonunu alıyoruz
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = async (e) => {
    e.preventDefault(); // sayfanın refresh olmasını engeller

    if (!title.trim()) return; // boş başlıkla todo ekleme

    await addTodo({ title: title.trim(), description: description.trim() });

    // başarılı ekleme sonrası inputları temizle
    setTitle("");
    setDescription("");
  };

  // Tailwind class'larını değişkende topladık -> okunabilirlik artsın
  const card =
    "w-full rounded-2xl bg-white/70 backdrop-blur-xl border border-white/70 ring-1 ring-black/5 shadow-sm p-5 sm:p-6";
  const label =
    "block text-sm font-medium text-amber-950/80";
  const input =
    "mt-2 w-full rounded-xl border border-amber-900/10 bg-white/75 px-4 py-3 text-amber-950 placeholder:text-amber-900/40 outline-none focus:ring-2 focus:ring-rose-300";
  const textarea =
    "mt-2 w-full rounded-xl border border-amber-900/10 bg-white/75 px-4 py-3 text-amber-950 placeholder:text-amber-900/40 outline-none focus:ring-2 focus:ring-rose-300 min-h-[110px] resize-none";
  const button =
    "w-full rounded-xl bg-rose-600 px-4 py-3 text-white font-semibold shadow-sm hover:bg-rose-700 active:scale-[0.99] transition";

  return (
    <form onSubmit={handleSubmit} className={card}>
      {/* Form başlığı */}
      <div className="flex flex-col items-center text-center">
        <div>
          <h2 className="text-lg font-semibold text-amber-950">Yeni ToDo</h2>
          <p className="mt-1 text-sm text-amber-900/70">
            Başlık zorunlu, açıklama opsiyonel.
          </p>
        </div>
      </div>

      {/* Inputlar */}
      <div className="mt-4 space-y-4">
        <div>
          <label className={label}>Todo başlığı</label>
          <input
            className={input}
            placeholder="Bir todo yazınız"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className={label}>Açıklama (opsiyonel)</label>
          <textarea
            className={textarea}
            placeholder="Todonuzu açıklayınız"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className={button}>
          Todo Ekle
        </button>
      </div>
    </form>
  );
}