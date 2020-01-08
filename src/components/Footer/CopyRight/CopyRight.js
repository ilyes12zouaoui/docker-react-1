import React from "react";
import facebookIcon from "./icons/facebook.png";
import githubIcon from "./icons/github.png";
import linkedInIcon from "./icons/linkedin.png";
import googlePlusIcon from "./icons/google-plus.png";
import { Modal, Button } from "react-bootstrap";
import "./CopyRight.css";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      className="text-center"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div
          className="p-2"
          style={{ fontFamily: "sans serif", fontSize: "20px" }}
        >
          email address : ilyes.zouaoui@esprit.tn
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="m-auto" variant={"danger"} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <footer
        style={{
          minHeight: "64px",
          backgroundColor: "#1c2331",
          position: "sticky",
          bottom: 0,
          zIndex: 2,
          display: "flex",
          "justify-content": "center",
          "align-items": "center"
        }}
        className="page-footer font-small mdb-color p-2"
      >
        <div className="container text-center text-md-left">
          <div
            className="row d-flex align-items-center"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-md-7 col-lg-8">
              <p
                className="text-center text-md-left m-0 footer-animation"
                style={
                  {
                    // color: "white",
                  }
                }
              >
                © 2019 Copyright : made by lass
              </p>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline" style={{ margin: 0 }}>
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/ilyes.zouaoui11"
                      target="_blank"
                    >
                      <img
                        src={facebookIcon}
                        style={{ width: "35px", height: "35px" }}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/ilyes-zouaoui"
                      target="_blank"
                    >
                      <img
                        src={linkedInIcon}
                        style={{ width: "35px", height: "35px" }}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <img
                      onClick={() => setModalShow(true)}
                      src={googlePlusIcon}
                      style={{ width: "35px", height: "35px" }}
                    />
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/ilyes12zouaoui?tab=repositories"
                      target="_blank"
                    >
                      <img
                        src={githubIcon}
                        style={{ width: "35px", height: "35px" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
