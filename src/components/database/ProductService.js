
import {db } from './FireBase';
import {collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore";

const productCollectionRef = collection(db,"Products");
class ProductsDataService{
    addProducts =(newProduct)=> {
        return addDoc(productCollectionRef,newProduct);
    };
    updateProduct =(id,updatedProduct)=> {
const productDoc = doc(db,"Products",id);
return updateDoc(productDoc,updatedProduct);
    };
    deleteProduct =(id)=> {
        const productDoc = doc(db,"Products",id);
        return deleteDoc(productDoc);
    };
    getAllProducts = () => {
        return getDocs(productCollectionRef);
    };
    getProduct = (id)=> {
        const productDoc= doc(db,"Products",id);
    return getDoc(productDoc);
    };
}
export default new ProductsDataService()