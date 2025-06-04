export const isAdminLoggedIn = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("isAdmin") === "true";
};

export const loginAdmin = (password: string): boolean => {
  const correctPassword = "admin123"; // فقط برای دمو
  if (password === correctPassword) {
    localStorage.setItem("isAdmin", "true");
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  localStorage.removeItem("isAdmin");
};
