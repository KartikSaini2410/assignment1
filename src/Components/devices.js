import React from 'react';

export default function Devices({ setDevicesValues, devicesValues }) {
    const handleChange = (e) => {
        setDevicesValues({ ...devicesValues, [e.target.name]: e.target.checked });
    };

    return (
        <div className="container p-0" style={{ border: "1px solid #d1d1d1" }}>
            <nav aria-label="breadcrumb" style={{ backgroundColor: "#d1d1d1", lineHeight: "1.8" }}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active text-black ml-1" aria-current="page">DEVICES</li>
                </ol>
            </nav>
            <div className="form-check m-2">
                <input type="checkbox" id="mobile" name="mobile" onChange={handleChange} />
                <label className="form-check-label px-2" htmlFor="mobile">Mobile</label>
            </div>
            <div className="form-check m-2">
                <input type="checkbox" id="tablet" name="tablet" onChange={handleChange} />
                <label className="form-check-label px-2" htmlFor="tablet">Tablet</label>
            </div>
            <div className="form-check m-2">
                <input type="checkbox" id="desktop" name="desktop" onChange={handleChange} />
                <label className="form-check-label px-2" htmlFor="desktop">Desktop</label>
            </div>
        </div>
    );
}
