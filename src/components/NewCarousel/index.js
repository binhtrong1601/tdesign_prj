import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-carousel-minimal/dist/components/Carousel";

const NewCarousel = (props) => {
  const id = useParams().id;
  const [products, setProducts] = useState([]);

  const handleFetchProduct = async () => {
    try {
      const data = await axios.get(
        `http://localhost:3001/${props.productName}/${id}`
      );
      setProducts(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleFetchProduct();
  }, []);

  const kits = products.kits;

  return (
    <div>
      {kits === undefined ? (
        <></>
      ) : (
        <Carousel
          data={kits}
          thumbnails={true}
          width="550px"
          height="550px"
          automatic={true}
          time={2000}
          thumbnailsWidth="120px"
          slideImageFit="cover"
        />
      )}
    </div>
  );
};

export default NewCarousel;
