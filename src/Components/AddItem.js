import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function AddItem() {
  return (
    <ReactBootStrap.Form>
      <div className="mb-3">
        <ReactBootStrap.Form.File id="formcheck-api-custom" custom>
          <ReactBootStrap.Form.File.Input isValid />
          <ReactBootStrap.Form.File.Label data-browse="Upload">
            Please upload the picture here..
          </ReactBootStrap.Form.File.Label>
          <ReactBootStrap.Form.Control.Feedback type="valid">
            Uploaded!!
          </ReactBootStrap.Form.Control.Feedback>
        </ReactBootStrap.Form.File>
      </div>
      <div className="mb-3">
        <ReactBootStrap.Form.File id="formcheck-api-regular">
          <ReactBootStrap.Form.File.Label>
            Regular file input
          </ReactBootStrap.Form.File.Label>
          <ReactBootStrap.Form.File.Input />
        </ReactBootStrap.Form.File>
      </div>
    </ReactBootStrap.Form>
  );
}

export default AddItem;
