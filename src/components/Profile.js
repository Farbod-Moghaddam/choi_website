import React from "react";
import image from "../assests/Choi_May.jpeg";

const Profile = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "50%", margin: "50px" }}>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <img
            src={image}
            alt="Profile"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
          <div style={{ marginLeft: "20px" }}>
            <h1>May Choi, MD MPH FRCPC</h1>
            <h2>Associate Professor, University of Calgary</h2>
            <h3>Cumming School of Medicine</h3>
            <p>The goal of my lab is to ...</p>
            <p>
              Dr. May Choi is a rheumatologist and clinician scientist who
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
              grant in her first year as an early career investigator.
            </p>
            <p>
              Welcome to our lab and feel free to contact us if you want to
              learn more, or even better, join our team!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
