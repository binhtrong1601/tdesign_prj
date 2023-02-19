import React from "react";

const CarouselTest = () => {
  const data = [
    {
      key: "1",
      image:
        "https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-arsenal-san-khach-1-300x300.jpg",
    },
    {
      key: "2",
      image:
        "https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-arsenal-san-khach-2-300x300.jpg",
    },
    {
      key: "3",
      image:
        "https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-arsenal-san-khach-5-300x300.jpg",
    },
    {
      key: "4",
      image:
        "https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-arsenal-san-khach-4-300x300.jpg",
    },
    {
      key: "5",
      image:
        "https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-arsenal-san-khach-3-300x300.jpg",
    },
  ];
  return (
    <div style={{ backgroundColor: "red", width: "50%" }}>
      <div
        id="demo"
        className="carousel slide"
        data-ride="carousel"
        style={{ width: "100%" }}
      >
        <div className="carousel-inner">
          {data.map((props) => (
            <div
              className={
                props.key === "1" ? "carousel-item active" : "carousel-item"
              }
              key={props.key}
              style={{ marginRight: "0px" }}
            >
              <img
                src={props.image}
                className={{ with: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>

      <div
        className="carousel"
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        {data.map((props) => (
          <img
            src={props.image}
            key={props.key}
            data-target="#demo"
            data-slide-to={props.key}
            className="action"
            alt="Los Angeles"
            style={{
              width: "100px",
              height: "100px",
              marginRight: "10px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselTest;
