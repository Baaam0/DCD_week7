import { useEffect } from "react"
import axios from "axios";
import Image

export default function Polychromatic() {

  useEffect(()=> {
    getPolychromaticData();
  }, [])

  return (
    <>
      Polychromatic

    </>
  )
}

