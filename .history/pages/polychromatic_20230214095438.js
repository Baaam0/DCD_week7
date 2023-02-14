import { useEffect } from "react"
import axios from "axios";

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

