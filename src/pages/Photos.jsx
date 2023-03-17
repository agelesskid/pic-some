import { Context } from "../Context"
import { useContext } from "react"
import { getClass } from "../utils"
import Image from "../components/Image"

export default function Photos() {

    const {photos} = useContext(Context)

    const imagesEl = photos.map((item, key)=>{
        return (
            <Image key={item.id} img={item} className={getClass(key)} />
        )
    })

    return (
        <main className="photos">
            {imagesEl}
        </main>
    )
}