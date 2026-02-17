// Bu dosya: API'ye giden fetch isteklerini tek yerde toplar.
// Amaç: component içinde fetch dağılmasın, bakımı kolay olsun.

const BASE_URL = "/api/todos";

// Tüm todoları getir (GET)
export async function getTodos() {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

// Yeni todo oluştur (POST)
export async function createTodo(payload) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to create todo");
  }

  return res.json();
}

// Todo güncelle (PUT) -> id query ile
export async function updateTodo(id, payload) {
  const res = await fetch(`${BASE_URL}?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to update todo");
  }

  return res.json();
}

// Todo sil (DELETE) -> id query ile
export async function deleteTodo(id) {
  const res = await fetch(`${BASE_URL}?id=${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete todo");
  }

  return res.json();
}