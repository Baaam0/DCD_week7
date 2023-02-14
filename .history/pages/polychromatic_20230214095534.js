import { useEffect, useState } from "react"
import axios from "axios";
import Image from "next/image";

export default function Polychromatic() {
  const [image, setImage] = useState([]);
  const 
  useEffect(()=> {
    getPolychromaticData();
  }, [])

  return (
    <>
      Polychromatic

    </>
  )
}

