import { db } from "@/firebase/config";
import { collection,orderBy,query,onSnapshot } from "firebase/firestore";
import { ref } from "vue";

const getCollection = (collectionName) => {
    const documents = ref(null);
    const error = ref(null);
    let collectionRef = collection(db,collectionName);

    const q = query(collectionRef, orderBy("createdAt"));

    onSnapshot( q,
        ( snap ) =>
            {
                let results = [];
                snap.docs.forEach( doc => 
                {
                    doc.data().createdAt && results.push({ ...doc.data(),id:doc.id });
                });
                documents.value = results;
                error.value = null;
            }, 
        ( err ) => 
            {
                console.log(err.message);
                documents.value = null;
                error.value = "could not fetch data";
            }
        );
        return { documents,error };
}
export default getCollection;82