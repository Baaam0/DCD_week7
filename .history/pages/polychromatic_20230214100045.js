import { useEffect, useState } from "react"
import axios from "axios";
import Image from "next/image";

export default function Polychromatic() {
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [time, setTime] = useState('Loading');
  const [data, setData] = useState('');
  const [coords, setCoords] = useState({});

  const apiKey = "BKu0nr7SnBGOqKTSgWfcyr59UwXtwa7g3dY4YQrC";
  const url = `https://epic.gsfc.nasa.gov/api/natural?api_key=${apiKey}`

  const getPolychromaticData = async ()

  useEffect(()=> {
    getPolychromaticData();
  }, [])

  return (
    <>
      Polychromatic

    </>
  )
}

