import { loadLogFood } from "../../actionCreators/loggedFoodActions";

const loadLogFoodData = (email, date) =>{
    return async (dispatch, getState) => {
        // const res = await fetch('http://localhost:8080/foods');
        const res = await fetch(`http://localhost:8080/loggedFood/${email}?date=${date}`);
        const data = await res.json();

        if(data.length){
            dispatch(loadLogFood(data))
        }
    }
};

export default loadLogFoodData;