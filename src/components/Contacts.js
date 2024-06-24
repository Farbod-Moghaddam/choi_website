const Contacts = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "50px",
      }}
    >
      <div style={{ marginRight: "-500px" }}>
        <h1>May Choi, MD MPH FRCPC</h1>
        <h2>Associate Professor, University of Calgary</h2>
        <p>Department of Physiology & Pharmacology</p>
        <p>3330 Hospital Drive NW</p>
        <p>Calgary AB T2N 4N1</p>
        <p>Email: may.choi@ucalgary.ca</p>
        <p>Phone: 403-955-8733</p>
      </div>
      <div>
        <h1>Administrative Assistant</h1>
        <p>Email: pauline.nkathazo@ucalgary.ca</p>
      </div>
    </div>
  );
};

export default Contacts;
