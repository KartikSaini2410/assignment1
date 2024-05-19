import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import _ from 'lodash';
import { useInformation, useDispatchInformation } from "./contextReducer";

export default function Specifications({setSpecificationValue}) {

    let dispatch = useDispatchInformation();
    let specificData = useInformation();
    
    // const cloneRow = async(row) => {
    //     await dispatch({ type: "CLONE", selected:[row] })
    // }
    const handleInputChange = (e, index, key) => {
        const newData = [...specificData?.selected]; // Copy the data array
        newData[index][key] = e.target.value; // Update the corresponding value
        setSpecificationValue(newData,"datta");
        // Dispatch an action to update the data in Redux state
        dispatch({ type: "UPDATE_DATA", selected:newData }); // Replace "UPDATE_DATA" with your actual action type
    };

  return (
    <>  <div className="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th className='bg-primary text-white' scope="col-1">Sel</th>
                        <th className='bg-primary text-white' scope="col-1">Country</th>
                        <th className='bg-primary text-white' scope="col-1">Language</th>
                        <th className='bg-primary text-white' scope="col-1">Target Group</th>
                        <th className='bg-primary text-white' scope="col-2">CPI($)</th>
                        <th className='bg-primary text-white' scope="col-2">LOI(MIN.)</th>
                        <th className='bg-primary text-white' scope="col-2">IR(%)</th>
                        <th className='bg-primary text-white' scope="col-2">Completes</th>
                    </tr>
                </thead>
                <tbody>
            {_.map(specificData?.selected, (item, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.country}</td>
                        <td>{item.language}</td>
                        <td className='h-100'>
                            <div className="d-flex">
                                <input type="text" value={item.targetGroup} onChange={(e) => handleInputChange(e, index, 'targetGroup')} />

                                <AddCircleIcon className='addIcon' onClick={() => dispatch({ type: "CLONE", selected: [{country: item.country, language: item.language, label: item.label}] })} />
                                <CancelIcon className='crossIcon' onClick={() => {dispatch({ type: "REMOVE", index: index });
                                const newState = _.filter(specificData?.selected, (obj, i) => i !== index);
                                setSpecificationValue(newState);
                                }
                            } />
                            </div>
                        </td>
                        <td> <input type="text" value={item.cpi} onChange={(e) => handleInputChange(e, index, 'cpi')} /> </td>
                        <td> <input type="text" value={item.loi} onChange={(e) => handleInputChange(e, index, 'loi')} /> </td>
                        <td> <input type="text" value={item.ir} onChange={(e) => handleInputChange(e, index, 'ir')} /> </td>
                        <td> <input type="text" value={item.completes} onChange={(e) => handleInputChange(e, index, 'completes')} /> </td>
                    </tr>
                )
            })}
        </tbody>
            </table>
        </div>
    </>
  )
}
