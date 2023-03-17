import { useState, useEffect, useRef } from "react"

export default function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        const eventRef = ref.current
        eventRef.addEventListener("mouseenter", enter)
        eventRef.addEventListener("mouseleave", leave)
        return () => {
            eventRef.removeEventListener("mouseenter", enter)
            eventRef.removeEventListener("mouseleave", leave)
        }
    }, [])
    
    return [hovered, ref]
}