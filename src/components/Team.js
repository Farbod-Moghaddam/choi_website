import React from "react";
import may from "../assests/Choi_May.jpeg";
import farbod from "../assests/Farbod.jpeg";

const Member = ({ name, title, bio, email, path }) => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <div
        style={{
          display: "flex",
          marginBottom: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={path}
          alt="Member"
          style={{ maxWidth: "250px", maxHeight: "250px" }}
        />
        <div style={{ marginLeft: "20px", width: "50%" }}>
          <h2>{name}</h2>
          <h3>{title}</h3>
          <p>{bio}</p>
          <p>Email: {email}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

const Team = () => {
  return (
    <div style={{ margin: "100px" }}>
      <Member
        name="May Choi, MD MPH FRCPC"
        title="Associate Professor, University of Calgary"
        bio="Dr. May Choi is a rheumatologist and clinician scientist who
              started on faculty at the Cumming School of Medicine, University
              of Calgary in 2020. She is an early career investigator, and her
              research is focused on biomarker discovery and validation for
              prediction of clinical outcomes in autoimmune rheumatic diseases,
              and the prevention of autoimmune disease development and
              disease-related complications. Her background and training include
              a Masters of Public Health in Epidemiology at Harvard University
              and a lupus fellowship at the Brigham and Women’s Hospital
              (Boston, MA) under the supervision of Dr. Karen Costenbader
              (epidemiologist, lupus expert and Professor of Medicine at Harvard
              Medical School). Dr. Choi is also the Associate Director of
              MitogenDx Laboratory for novel autoantibody and biomarker testing
              for autoimmune diseases and the Associate Director of Research for
              the University of Calgary Lupus Centre of Excellence, which
              complement her research. She is funded by several career
              development awards including the Helios UCMG Post Fellowship
              Training Award, Dr. Subrata Ghosh Fellowship Award, and the Lupus
              Foundation of America Gary S. Gilkeson Career Development Award.
              She also received a Canadian Institutes of Health Research project
              grant in her first year as an early career investigator."
        email="may.choi@ucalgary.ca"
        path={may}
      />
      <Member
        name="Farbod Moghaddam"
        email="farbod.moghaddam@ucalgary.ca"
        title="Summer Student"
        bio="Farbod is a summer student in the Choi Lab. He is currently
              working on a project related to autoimmune diseases."
        path={farbod}
      />
      {/* Add more members as needed */}
    </div>
  );
};

export default Team;
