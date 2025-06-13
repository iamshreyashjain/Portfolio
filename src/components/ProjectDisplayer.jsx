import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import portfolioData from "../assets/Data/PortfolioData/PortfolioData"

export default function ProjectDisplayer() {
    const { id } = useParams()
    const [feed, setFeed] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const result = portfolioData.find(item => item.id === Number(id))
        if (!result) {
            setNotFound(true)
        } else {
            setFeed([result])
            setActiveIndex(0)
            setNotFound(false)
        }
    }, [id])

    if (notFound) {
        return <h2>Project not found</h2>
    }

    const currentItem = feed[0]
    const images = currentItem?.images || []
    const activeImage = images[activeIndex]?.src || currentItem?.src

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
    }
    
    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % images.length)
    }


    return (
        <div className="m-2">
            {feed.map((item)=>(
                <div key={item.key}>
                    <div>{item.title}</div>
                </div>
            ))}
            <div className="">
                <img src={activeImage} alt="Main Preview" width={400} className="mb-4 h-62 shadow-md mx-auto" />
            </div>
            <div className="flex items-center gap-2 justify-center items-center">
                <button onClick={handlePrev} className="border px-3 py-1 rounded">Prev</button>
                {images.map((img, index) => (
                    <img
                        key={img.key}
                        src={img.src}
                        alt={`Preview ${img.key}`}
                        width={100}
                        className={`border p-1 rounded-md cursor-pointer transition ${
                            index === activeIndex ? "ring-2 ring-blue-500" : ""
                        }`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
                <button onClick={handleNext} className="border px-3 py-1 rounded">Next</button>
            </div>
        </div>
    )
}
