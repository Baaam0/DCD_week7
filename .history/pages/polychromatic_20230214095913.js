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
  const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY`

  useEffect(()=> {
    getPolychromaticData();
  }, [])

  return (
    <>
      Polychromatic

    </>
  )
}

