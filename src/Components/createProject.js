import React,{useState, useEffect} from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ProjectInformation from './projectInformation';
import Devices from './devices';
import FilterOptions from './filterOptions';
import Regions from './regions';
import Specifications from './specifications';
import _ from 'lodash';
import { useInformation, useDispatchInformation } from "./contextReducer";

export default function CreateProject({closeRightPanel}) {

    let data = useInformation();
    let dispatch = useDispatchInformation();
    const [projectInformValues, setProjectInformValues] = useState({
        projectName: "",
        workOrderNo:"",
        projectType:"",
        category:"",
        client:"",
        clientContact:"",
        salePerson:"",
        projectManager:"",
        description:""
    });
    const [devicesValues, setDevicesValues] = useState({
        mobile: false,
        tablet: false,
        desktop: false
    });
    const [filterOptionValues, setFilterOptionValues] = useState({
        gateSurvey: false,
        fraudDetection: false,
    });
    const [regions, setRegions] = useState([]);
    const [specificationValues, setSpecificationValue] = useState(data.selected);
    const [makeSubmitDisable, setMakeSubmitDisable] = useState(true);

    useEffect(()=>{
        if(!_.isEmpty(projectInformValues?.projectName) && !_.isEmpty(projectInformValues?.projectType) && !_.isEmpty(data.selected)){
            setMakeSubmitDisable(false);
        }
        else{
            setMakeSubmitDisable(true);
        }

    },[projectInformValues,regions, data])

    const handleSubmit = () => {
        let allData = {
            projectInformValues: { ...projectInformValues },
            devicesValues: { ...devicesValues },
            filterOptionValues: { ...filterOptionValues },
            regions: [ ...regions ], // Assuming regions is an array
            specificationValues: [...specificationValues ]
        };
        console.log(allData, '-----required data from all sections')
    }

    const handleCancel = () => {
        dispatch({type:"DELETE_ALL", selected:[]});
        closeRightPanel();
    }

  return (
    <>
        <div className="container w-100">
            <button type="button" className="btn btn-secondary m-1" onClick={handleCancel}>
                <KeyboardBackspaceIcon /> Back
            </button>
            <div className="row">
                <div className="col-8">
                    <nav aria-label="breadcrumb" style={{backgroundColor:"#d1d1d1", lineHeight:"1.8"}}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active text-black ml-1" aria-current="page">PROJECT INFORMATION</li>
                        </ol>
                    </nav>
                    <ProjectInformation projectInformValues={projectInformValues} setProjectInformValues={setProjectInformValues}/>
                </div>
                <div className="col-4">
                    <div className="row ml-1 w-100">
                        <Devices setDevicesValues={setDevicesValues} devicesValues={devicesValues} />
                    </div>
                    <div className="row ml-1 mt-2 w-100">
                        <FilterOptions filterOptionValues={filterOptionValues} setFilterOptionValues={setFilterOptionValues} />
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="container p-0" style={{border:"1px solid #d1d1d1"}}>
                        <nav aria-label="breadcrumb" style={{backgroundColor:"#d1d1d1", lineHeight:"1.8"}}>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active text-black ml-1" aria-current="page">REGIONS</li>
                            </ol>
                        </nav>
                        <Regions setRegions={setRegions} />
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="container p-0" style={{border:"1px solid #d1d1d1"}}>
                        <nav aria-label="breadcrumb" style={{backgroundColor:"#d1d1d1", lineHeight:"1.8"}}>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active text-black ml-1" aria-current="page">SPECIFICATIONS <span style={{ color: 'red' }}>*</span></li>
                            </ol>
                        </nav>
                        <Specifications data={data} setSpecificationValue={setSpecificationValue} />
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="container p-0" style={{ border: "1px solid #d1d1d1" }}>
                        <nav aria-label="breadcrumb" style={{ backgroundColor: "#d1d1d1", lineHeight: "1.8" }}>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item active w-100" aria-current="page">
                                    <div className="d-flex justify-content-end">
                                        <span className='text-bold m-auto'> Please fill all required fields to enable submit (open console to see the submit data)</span>
                                        <button type="button" className="btn btn-secondary m-1 bg-danger" onClick={handleCancel}>
                                            Cancel
                                        </button>
                                        <button type="button" className={`btn btn-secondary m-1 bg-success ${makeSubmitDisable ? "submit-btn-disable" : ""}`} onClick={handleSubmit}>
                                            Submit
                                        </button>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
