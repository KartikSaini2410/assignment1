import React, { useState } from 'react';
import CreateProject from './createProject';

export default function Home() {
  const [show, setShow] = useState(false);
  const [openCreateProj, setOpenCreateProj] = useState(false);

  const showText = () => {
    setShow(!show);
  }

  const handleCreateProject = () => {
    setOpenCreateProj(true);
  }

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="row flex-grow-1">
        <div className="col-2 bg-primary px-0">
          <div className="accordion w-100 bg-primary" id="accordionExample">
            <div className="accordion-item" style={{borderBottomColor:"#0d6efd", borderLeftColor:"#0d6efd"}}>
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className={`accordion-button text-white bg-primary ${show? 'arrowDownward' : "arrowUpward"}`}
                  type="button"
                  onClick={showText}
                //   style={{backgroundColor:"#0d6efd"}}
                  aria-expanded={show}
                  aria-controls="collapseTwo"
                >
                  Project
                </button>
              </h2>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${show ? 'show' : ''}`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-white p-0">
                <button type="button" class="btn btn-light d-block w-100 text-start" onClick={handleCreateProject}>Create Project</button>
                <button type="button" class="btn btn-light d-block w-100 text-start">Manage Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10">
          {openCreateProj && <CreateProject 
          closeRightPanel={()=> setOpenCreateProj(false)}
          />}
        </div>
      </div>
    </div>
  );
}
