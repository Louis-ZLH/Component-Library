import { useMutation } from "@tanstack/react-query";
import { getUserProfile, login } from "../../services/Users";
import { store } from "../../store";
import { setUser } from "./userSlice";
import toast from "react-hot-toast";

const loginVerify = async (data) => {
  const { username: email, password } = data;
  try {
    const { user } = await login(email, password);
    if (user.id) {
      const profile = await getUserProfile(user.id);
      store.dispatch(setUser(profile[0]));
    } else {
      throw new Error("user ID not found");
    }
  } catch (error) {
    throw error;
  }
};

export function useLogin() {
  const { isPending: isLogining, mutate: verifyLogin } = useMutation({
    mutationFn: loginVerify,
    onError: (error) => {
      toast.error(`Login failed, ${error.message}`);
    },
    onSuccess: () => {
      toast.success("Login successful!");
    },
  });
  return { isLogining, verifyLogin };
}
