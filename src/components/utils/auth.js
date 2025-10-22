// Helpers de storage según "rememberMe"
function getStore(rememberMe) {
  return rememberMe ? localStorage : sessionStorage;
}

export function getAuth() {
  const raw = localStorage.getItem("auth") || sessionStorage.getItem("auth");
  return raw ? JSON.parse(raw) : null;
}

export function isAuthenticated() {
  return Boolean(getAuth());
}

export function loginUser(username, password, rememberMe = true) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userFound = users.find((u) => u.username === username && u.password === password);

  if (!userFound) return { ok: false, error: "Credenciales inválidas" };

  const token = "fake-token-" + Date.now();
  const store = getStore(rememberMe);
  store.setItem("auth", JSON.stringify({ username, token, at: Date.now() }));
  // Asegura que el otro storage no quede con auth viejo
  (store === localStorage ? sessionStorage : localStorage).removeItem("auth");

  return { ok: true };
}

export function registerUser(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((u) => u.username === username)) {
    return { ok: false, error: "El usuario ya existe" };
  }
  users.push({ username, password, createdAt: Date.now() });
  localStorage.setItem("users", JSON.stringify(users));
  return { ok: true };
}

export function logoutUser() {
  localStorage.removeItem("auth");
  sessionStorage.removeItem("auth");
}
