/* eslint-disable default-case */

import { ADD_TASK, DELETE_TASK , EDIT_TASK } from './actions'

const initialState = {
    tasks : []
}
const reducer = (state= initialState , action) => {

    switch(action.type) {
         case ADD_TASK  : {
            return {
                tasks : [...state.tasks, action.payload]
            }
         }
        case EDIT_TASK : {
            const tempTask =[...state.tasks];
            tempTask[action.payload.index]= action.payload.task;

            return {
                tasks : tempTask
            }
        }
        case DELETE_TASK : {
            const tempTask = [...state.tasks]
            tempTask.splice(action.payload,1);

            return {
              tasks : tempTask
            }
        }
        default : {
            return state;
        }
    }
}

export default reducer
