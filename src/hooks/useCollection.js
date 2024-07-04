import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot  } from "firebase/firestore"; 





import {db} from "../firebase/firebaseConfig";


export const useCollection = (collectionName, whereData) => {
    const [data, setData] = useState(null);
    useEffect( () =>{
        if(whereData[2]){
            
        }
    } )
}



