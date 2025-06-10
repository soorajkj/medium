export const generateUsername = (email: string) => {
  return email
    .split("@")[0]
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .concat(Math.random().toString(36).slice(-6));
};
