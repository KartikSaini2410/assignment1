import React, {useState} from 'react';
import Select from 'react-select';
import _ from 'lodash';
import { useDispatchInformation } from "./contextReducer";

export default function Regions({setRegions}) {

    const [selectedOptions, setSelectedOptions] = useState([]);

    let dispatch = useDispatchInformation();
    let options = [
        { value: 'usa', label: 'United States', language: 'English', country: 'United States' },
        { value: 'canada', label: 'Canada', language: 'English, French', country: 'Canada' },
        { value: 'mexico', label: 'Mexico', language: 'Spanish', country: 'Mexico' },
        { value: 'brazil', label: 'Brazil', language: 'Portuguese', country: 'Brazil' },
        { value: 'uk', label: 'United Kingdom', language: 'English', country: 'United Kingdom' },
        { value: 'germany', label: 'Germany', language: 'German', country: 'Germany' },
        { value: 'france', label: 'France', language: 'French', country: 'France' },
        { value: 'italy', label: 'Italy', language: 'Italian', country: 'Italy' },
        { value: 'spain', label: 'Spain', language: 'Spanish', country: 'Spain' },
        { value: 'china', label: 'China', language: 'Mandarin', country: 'China' },
        { value: 'japan', label: 'Japan', language: 'Japanese', country: 'Japan' },
        { value: 'india', label: 'India', language: 'Hindi, English', country: 'India' },
        { value: 'russia', label: 'Russia', language: 'Russian', country: 'Russia' },
        { value: 'australia', label: 'Australia', language: 'English', country: 'Australia' },
        { value: 'south-africa', label: 'South Africa', language: 'English', country: 'South Africa' },
    ]


    const handleChange = async(newSelectedOptions) => {
        const updatedRegions = _.map(newSelectedOptions, opt => _.pick(opt, 'country'));
        setRegions(updatedRegions);
        if (newSelectedOptions.length > selectedOptions.length) {
            // An item was added
            await dispatch({ type: "ADD_COUNTRY", selected:newSelectedOptions })
        } else if (newSelectedOptions.length < selectedOptions.length) {
            // An item was removed
            const removedOption = selectedOptions.find(option => 
                !newSelectedOptions.some(newSelectedOption => newSelectedOption.value === option.value)
            );
            await dispatch({ type: "REMOVE_COUNTRY", selected:removedOption })
        }
        setSelectedOptions(newSelectedOptions);
    };
      
      
 return (
    <>
        <Select 
            options={options}
            isMulti
            name="countries"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleChange}
            value={selectedOptions}
        />
    </>
  )
}
