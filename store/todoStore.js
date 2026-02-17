// Zustand store: todos state + API aksiyonları burada.
// Amaç: global state yönetimi ve CRUD aksiyonlarını tek merkezde toplamak.

import { create } from "zustand";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/todoApi";

export const useTodoStore = create((set, get) => ({
  todos: [],
  loading: false,
  error: null,

  // Listeyi çek (GET)
  fetchTodos: async () => {
    try {
      set({ loading: true, error: null });
      const data = await getTodos();
      set({ todos: data, loading: false });
    } catch (err) {
      set({ loading: false, error: err.message || "Error" });
    }
  },

  // Todo ekle (POST) + state güncelle
  addTodo: async ({ title, description }) => {
    try {
      set({ error: null });
      const newTodo = await createTodo({ title, description });

      // UI'ı refresh etmeden güncellemek için state'e ekliyoruz
      set({ todos: [...get().todos, newTodo] });
    } catch (err) {
      set({ error: err.message || "Error" });
    }
  },

  // Todo status güncelle (PUT) + state güncelle
  toggleTodoStatus: async (id, currentStatus) => {
    try {
      set({ error: null });
      const updated = await updateTodo(id, { status: !currentStatus });

      set({
        todos: get().todos.map((t) => (t.id === id ? updated : t)),
      });
    } catch (err) {
      set({ error: err.message || "Error" });
    }
  },

  // Todo sil (DELETE) + state güncelle
  removeTodo: async (id) => {
    try {
      set({ error: null });
      await deleteTodo(id);

      set({
        todos: get().todos.filter((t) => t.id !== id),
      });
    } catch (err) {
      set({ error: err.message || "Error" });
    }
  },
}));  