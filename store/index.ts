import { configureStore } from "@reduxjs/toolkit";
import categorieSlicer from "./slicers/categorieSlicer";
import storeSlicer from "./slicers/storeSlicer";




export const store = configureStore({
    reducer: {
        categories: categorieSlicer,
        storeOwn: storeSlicer,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;