import { createSlice } from "@reduxjs/toolkit";

interface storeElement {
    id: string;
    item: CategorieItem,
    count: number;
}

interface initialStateProps {
    total: number;
    list: storeElement[],
}


const initialState: initialStateProps = {
    total: 0,
    list: [],
}

const storeSlicer = createSlice({
    name: 'store',
    initialState,
    reducers: {
        addToStore: (state, action) => {
            const objId = state.list.findIndex(obj => obj.id === action.payload.id)
            if (objId > -1) {
                state.list = state.list.map(obj =>
                    obj.id === action.payload.id
                        ? { ...obj, count: obj.count + action.payload.count }
                        : obj
                )
            } else {
                state.list.push(action.payload);
            }
            state.total += (+action.payload.item.price.slice(2) * action.payload.count)
        },
        deleteFromStore: (state, action) => {
            const objId = state.list.findIndex(obj => obj.id === action.payload);
            if (objId > -1) {
                state.list = state.list.filter(obj => obj.id !== action.payload)
            }
        },
        minusTotal: (state, action) => {
            state.total -= action.payload
        },
        plusTotal: (state, action) => {
            state.total += action.payload
        },
        restart: state => {
            state.list = [];
            state.total = 0;
        }
    }
})



export const { addToStore, deleteFromStore, minusTotal, plusTotal, restart } = storeSlicer.actions;

export default storeSlicer.reducer