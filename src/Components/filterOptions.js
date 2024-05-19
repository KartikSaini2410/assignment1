import React from 'react'

export default function FilterOptions({setFilterOptionValues, filterOptionValues}) {

    const handleChange = (e) => {
        setFilterOptionValues({ ...filterOptionValues, [e.target.name]: e.target.checked });
    };

  return (
    <div className="container p-0" style={{border:"1px solid #d1d1d1"}}>
        <nav aria-label="breadcrumb" style={{backgroundColor:"#d1d1d1", lineHeight:"1.8"}}>
            <ol class="breadcrumb">
                <li class="breadcrumb-item active text-black ml-1" aria-current="page">FILTER OPTIONS</li>
            </ol>
        </nav>
        <div class="form-check m-2">
            <input type="checkbox" name="gateSurvey" id="gateSurvey" onChange={handleChange} />
            <label class="form-check-label px-2" htmlFor="gateSurvey">Gatesurvey</label>
        </div>
        <div class="form-check m-2">
            <input type="checkbox" name="fraudDetection" id="fraudDetection" onChange={handleChange} />
            <label class="form-check-label px-2" htmlFor="fraudDetection">Fraud_detection</label>
        </div>
    </div>
  )
}
