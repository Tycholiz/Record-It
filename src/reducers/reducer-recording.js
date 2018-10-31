import { START_RECORDING } from "../constants/action-types";

const initialState = {
	recording: false,
};

const reducer = (state = initialState, action) => {
	console.log("heya! we made it to the reducer")
	switch (action.type) {
		case START_RECORDING:
			return {
				...state,
				recording: !state.recording
			};
		default:
			return state;
	}
};
export default reducer;