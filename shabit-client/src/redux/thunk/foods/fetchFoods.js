import { loadFood } from "../../actionCreators/loggedFoodActions";

const loadFoodData = () =>{
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:8080/foods');
        const data = await res.json();

        if(data.length){
            dispatch(loadFood(data))
        }
    }
};

export default loadFoodData;

