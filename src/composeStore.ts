import create from "zustand";
import { composeStoreOptions } from "./composeStoreOptions";
import { composeGenericStore } from "./compseGenericStore";


const composeStore = <DataType>(options: composeStoreOptions<DataType>) => {
    return composeGenericStore(create, options);
}
export { composeStore };

