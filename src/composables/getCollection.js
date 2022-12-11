import { db } from "@/firebase/config";
import { collection,orderBy,query,onSnapshot } from "firebase/firestore";
import { ref, watchEffect } from "vue";

const getCollection = (collectionName) => {
    const documents = ref(null);
    const error = ref(null);
    let collectionRef = collection(db,collectionName);

    const q = query(collectionRef, orderBy("createdAt"));

    const unsub = onSnapshot( q,
        ( snap ) =>
            {
                console.log('snapshot');
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
        watchEffect ( (onInvalidate) => 
        {
            // unsub from pev collection when watcher is stop
            onInvalidate(()=> {
                unsub();
            })
        });
        return { documents,error };
}
export default getCollection;82