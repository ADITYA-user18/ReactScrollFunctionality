import React, { useState, useEffect } from "react";

const Scroll = ({OnScrollChange}) => {
  const [Error, setError] = useState("");
  const [Products, setProducts] = useState([]);


  async function GetData() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      setProducts((prev) => [...prev, ...data.products]);
    } catch (error) {
      setError(error);
    }
  }

  async function ScrollerFunction() {
    const HowMuchWeScrolled = document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    let TotalHeightPercentage = (HowMuchWeScrolled / height) * 100;
       if (OnScrollChange) OnScrollChange(TotalHeightPercentage)
  }

  useEffect(() => {
    document.addEventListener("scroll", ScrollerFunction);
    return () => document.removeEventListener("scroll", ScrollerFunction);
  }, []);

  useEffect(() => {
    GetData();
  }, []);

  if (Error) {
    return <div>Error :{Error.message}</div>;
  }


  return (
    <div>
      {Products.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
};

export default Scroll;
