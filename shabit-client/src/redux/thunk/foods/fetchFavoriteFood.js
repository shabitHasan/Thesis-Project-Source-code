import { loadFavoriteFood } from "../../actionCreators/loggedFoodActions";

const loadFavoriteFoodData = (email) =>{
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:8080/favouriteFood/${email}`);
        const data = await res.json();

        if(data.length){
            dispatch(loadFavoriteFood(data))
        }
    }
};

export default loadFavoriteFoodData;