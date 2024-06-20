import React from "react";
import image from "../assests/test.png";

const Research = () => {
  const textStyle = {
    marginBottom: "-10px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "50%", margin: "50px", flexDirection: "row" }}>
        <div style={{ display: "flex", marginBottom: "5px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "5px",
            }}
          >
            <h1 style={textStyle}>Areas of Research</h1>
            <h3 style={textStyle}>
              Proteomics, proteases, systems biology, inflammation, immunity
            </h3>
            <p style={textStyle}>
              The goal of our lab is to understand how proteolytic
              post-translational modifications lead to the activation or
              inactivation of immune responses in inflammatory diseases. By the
              irreversible processing of bioactive proteins and signalling
              molecules, proteases modulate all aspects of biology. We focus on
              proteases and their substrates on a cell, tissue, or organism-wide
              scale.
            </p>
            <h1>Projects</h1>
            <div
              style={{
                display: "flex",
                marginBottom: "5px",
              }}
            >
              <img
                src={image}
                alt="Profile"
                style={{ maxWidth: "500px", maxHeight: "500px" }}
              />
              <div style={{ marginLeft: "20px" }}>
                <h3 style={textStyle}>Calpains</h3>
                <p style={textStyle}>
                  Unraveling how calcium signalling regulates calpain
                  proteolytic networks. Selected proteins have evolved to bind
                  Ca2+ to buffer its levels, and alterations in Ca2+ homeostasis
                  initiate or terminate multiple cellular signalling pathways
                  that govern cell shape, adhesion, migration, and viability.
                  Activation of G protein-coupled receptors (GPCRs) can trigger
                  intracellular Ca2+ release through the downstream generation
                  of 1,4,5-inositol triphosphate (IP3). When IP3 binds to its
                  cognate-receptor (IP3R) in the endoplasmic reticulum, Ca2+
                  concentrations rise from ~100 nM to more than 1 mM (>10-fold
                  increase) dictating profound changes on cellular functions.
                  Among the key downstream effectors of Ca2+ signalling are a
                  family of 15 cysteine proteases called calpains, which are
                  directly activated at their catalytic sites by changes in
                  intracellular Ca2+ levels. These proteases regulate diverse
                  cellular processes through targeted proteolysis and precise
                  processing of multiple protein substrates. We are using
                  systems biology approaches to identify novel calpain
                  substrates and understand their effect on cellular functions
                  and immune signalling.
                </p>
              </div>
            </div>
            <h3 style={textStyle}>Key words describing our research</h3>
            <p style={textStyle}>
              Protease, calpain, matrix metalloproteinase (MMP), cathepsin,
              macrophage, proteomics, N-terminomics, TAILS (Terminal Amino
              Isotopic Labeling of Substrates), PICS (Proteomic Identification
              of protease Cleavage Sites), systems biology, cell migration.
            </p>
            <h3 style={textStyle}>Techniques used in our laboratory</h3>
            <p style={textStyle}>
              Mouse models of peritonitis, cancer and arthritis, calcium assay,
              cell migration/invasion, immunohistochemistry, TAILS (Terminal
              Amino Isotopic Labeling of Substrates), PICS (Proteomic
              Identification of protease Cleavage Sites), TopFIND, TopFINDER,
              PathFINDer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
