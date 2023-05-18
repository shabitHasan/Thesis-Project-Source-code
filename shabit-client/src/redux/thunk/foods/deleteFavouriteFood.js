import { removeFavouriteFood } from "../../actionCreators/loggedFoodActions";

const deleteFavoritedFood = (id) => {
    return async ( dispatch, getState ) => {
        const res = await fetch(`http://localhost:8080/favoriteFood/${id}`, {
            method : "DELETE",
            headers : {
                "content-type" : "application/json"
            },
        });
        const data = await res.json();

        if(data.acknowledged){
            dispatch(removeFavouriteFood(id))
        }
    };
};

export default deleteFavoritedFood;
