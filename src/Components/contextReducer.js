import React, { createContext, useContext, useReducer } from 'react';
import _ from 'lodash';

const InformationStateContext = createContext();
const InformationDispatchContext = createContext();

const reducer = (state,action)=> {
    switch(action.type){
        case "ADD_COUNTRY":
            let arr = state?.selected;
            if(!_.isEmpty(arr)){
                action?.selected.forEach(obj => {
                    if (!_.some(arr, item => item.value === obj.value)) {
                        arr.push(obj);
                    }
                });
            }
            else{
                arr = action.selected;
            }

            return {
                ...state,
                selected: arr
              }
        case "REMOVE_COUNTRY":
                let removedState = state?.selected.filter((item) => item.country !== action?.selected?.country);
                return {
                    ...state,
                    selected: removedState
                }
        case "CLONE":
            let updState = [...state?.selected, ...action?.selected];
            return {
                ...state,
                selected: updState
            }
        case "REMOVE":
            const newState = _.filter(state?.selected, (obj, i) => i !== action?.index);
            return {
                ...state,
                selected: newState
            }

        case "UPDATE_DATA":
            return {
                ...state,
                selected: action?.selected
            }
        case "DELETE_ALL":
            let empArray= [];
            return empArray;

        default:
            console.log("Error in Reducer")
    }
}

export const CreateProject =({children})=> {
    const[state, dispatch] = useReducer(reducer,[]);
    return(
        <InformationDispatchContext.Provider value={dispatch}>
            <InformationStateContext.Provider value={state}>
                {children}
            </InformationStateContext.Provider>
        </InformationDispatchContext.Provider>
    )
}

export const useInformation = () => useContext(InformationStateContext);
export const useDispatchInformation = () => useContext(InformationDispatchContext);
