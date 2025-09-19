import React from "react";


const DeliveringMoments = () => {
  const data = [
    {
      icon: "❤️",
      title: "Creating Change",
      desc: "Crafting solutions that uplift lives across MENA",
    },
    {
      icon: "➡️",
      title: "Local Lift",
      desc: "Helping businesses grow in their own way",
    },
    {
      icon: "🛵",
      title: "Rider Power",
      desc: "Backing riders every step of the way",
    },
    {
      icon: "📱",
      title: "Tech Ties",
      desc: "Connecting communities through innovative technology",
    },
  ];

  return (
    <div className="container-fluid py-5">
      <h2 className="fw-bold text-center mb-4">
        Delivering <span style={{ color: "orange" }}>moments</span>
      </h2>
      <div className="row text-center">
        {data.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div>
              <div style={{ fontSize: "2.5rem", color: "orange" }}>
                {item.icon}
              </div>
              <h5 className="fw-bold mt-3">{item.title}</h5>
              <p className="text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveringMoments;
