import React from "react";

export default function ProjectInformation({projectInformValues, setProjectInformValues}) {

    const handleChange = (e) => {
        e.preventDefault();
        setProjectInformValues({...projectInformValues, [e.target.name]: e.target.value});
    }

  return (
    <form>
        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Project Name <span style={{ color: 'red' }}>*</span> </label>
                    <input
                        type="text"
                        name="projectName"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Project Name"
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Work Order No.#</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Work Order No"
                        name="workOrderNo"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Project Type <span style={{ color: 'red' }}>*</span> </label>
                    <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        placeholder="Work Order No"
                        name="projectType"
                        onChange={handleChange}
                    >
                        <option value="" disabled selected hidden>
                        Please select
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div className="col-4">
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Category</label>
                    <select className="form-control" id="exampleFormControlSelect2" name="category" onChange={handleChange}>
                        <option value="" disabled selected hidden>
                        Please select
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div className="col-4">
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect3">Client</label>
                    <select className="form-control" id="exampleFormControlSelect3" name="client" onChange={handleChange}>
                        <option value="" disabled selected hidden>
                        Select a person
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect4">
                        Client's Contact
                    </label>
                    <select className="form-control" id="exampleFormControlSelect4" name="clientContact" onChange={handleChange}>
                        <option value="" disabled selected hidden>
                        Please select
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div className="col-4">
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect5">Sales Person</label>
                    <select className="form-control" id="exampleFormControlSelect5" name="salePerson" onChange={handleChange}>
                        <option value="" disabled selected hidden>
                        Please select
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div className="col-4">
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect6">Project Manager</label>
                    <select className="form-control" id="exampleFormControlSelect6" name="projectManager" onChange={handleChange}>
                        <option value="" disabled selected hidden>
                        Please select
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Project Description</label>
                <textarea
                name="description"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                defaultValue="Project Description"
                onChange={handleChange}
                onFocus={(e) => { if (e.target.value === 'Project Description') e.target.value = ''; }}
                onBlur={(e) => { if (e.target.value === '') e.target.value = 'Project Description'; }}
                ></textarea>
            </div>
        </div>
    </form>
  );
}
