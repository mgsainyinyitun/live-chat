import { db } from "@/firebase/config";
import { collection, doc,setDoc } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (collectionName) => {
    const error = ref(null);
    const addDoc = async (data) => {
        error.value = null;
        try {
            const reference = doc(collection(db, collectionName ));
            await setDoc(reference, data);
        } catch (err) {
            console.log(err.message);
            error.value = "Could not send the message";
        }
    }

    return {addDoc,error};
}

export default useCollection;