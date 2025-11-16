import supabase from "./supabase.js";

export const test = async () => {
  const { data, error } = await supabase.from("admin").select("*");
  if (error) {
    console.error("Error fetching users:", error);
    return [];
  }
  return data;
};

export const getUserProfile = async (userId) => {
  let { data: profile, error } = await supabase
    .from("admin")
    .select("*")
    .eq("UserUID", userId);

  if (error) {
    throw new Error(error.message);
  }
  return profile;
};

export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
