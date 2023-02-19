import axios from "axios";
import React, { useEffect, useState } from "react";
import KitsItem from "../KitsItem";
import styles from "./ListKits.module.css";

const ListKits = () => {
  const [kits, setKits] = useState([]);

  const handleFetchProduct = async () => {
    const data = await axios.get("http://localhost:3001/kitsclub");
    console.log(data);
    setKits(data.data);
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);
  console.log(kits);
  return (
    <div className="container">
      {kits.map((kits) => (
        <KitsItem data={kits} key={kits.id} />
      ))}
    </div>
  );
};

export default ListKits;
