import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { ref } from "vue";
const error = ref(null);
const logout = async () => {
  error.value = null;
  try {
    await signOut(auth);
  } catch (error) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useLogout = () => {
  return { logout, error };
};

export default useLogout;
