import { createSlice } from "@reduxjs/toolkit";


interface initialStateProps {
    categories: CategorieItem[],
    active: string,
}

const initialState: initialStateProps = {
    categories: [
        {
            id: '0',
            img: 'https://mcdonalds.com.pk/wp-content/uploads/2022/08/09-McChicken.png',
            name: 'Combo Meal',
            price: '$ 2.54',
        },
        {
            id: '1',
            img: 'https://static.wikia.nocookie.net/ronaldmcdonald/images/f/fc/Royal_McChicken.png/revision/latest?cb=20160108163801',
            name: 'Combo Meal',
            price: '$ 2.54',
        },
        {
            id: '2',
            img: 'https://www.hotelierindia.com/cloud/2021/12/08/McDonalds.png',
            name: 'Happy Meal',
            price: '$ 2.54',
        },
        {
            id: '3',
            img: 'https://www.mcdonalds.com.sg/sites/default/files/2022-02/CHF_SG_PRODUCT_505411_BEVERAGE_COLDDRINKS_MEDIUMMOCHAFRAPPE.png',
            name: 'Beverages',
            price: '$ 2.54',
        },
        {
            id: '4',
            img: 'https://www.mcdonalds.be/_webdata/product-images/MCDO_Chicken-nugget_KIOSK.png',
            name: 'Chicken',
            price: '$ 2.54',
        },
        {
            id: '5',
            img: 'https://mcdonalds.com.hk/wp-content/uploads/2020/07/MDS200401_SC_DK_Other-5.png',
            name: 'Snacks & Sides',
            price: '$ 2.54',
        },
    ],
    active: '',
}




const categorieSlicer = createSlice({
    name: 'categorie',
    initialState,
    reducers: {
        activeCategorie: (state, action) => {
            state.active = action.payload;
        }
    }
})


export const { activeCategorie } = categorieSlicer.actions;

export default categorieSlicer.reducer;