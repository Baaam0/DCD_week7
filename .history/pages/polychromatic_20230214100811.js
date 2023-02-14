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

  const getPolychromaticData = async () => {
    const res = await axios.get(url);
    const data = await res.data;
    console.log(data);

    const caption = data[0].caption;
    const date = data[0].date.split(" ")[0];

    const date_formatted = date.replaceAll("-","/")
    console.log(date_formatted);

    let times = [];
    let images = [];

    for(let i = 0; i < data.length; i)

  }

  useEffect(()=> {
    getPolychromaticData();
  }, [])

  return (
    <>
      Polychromatic

    </>
  )
}

