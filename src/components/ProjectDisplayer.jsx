import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import portfolioData from "../assets/Data/PortfolioData/PortfolioData"

export default function ProjectDisplayer() {
    const { id } = useParams()
    const [feed, setFeed] = useState([])
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        const result = portfolioData.find(item => item.id === Number(id))
        if (!result) {
            setNotFound(true)
        } else {
            setFeed([result])
            setNotFound(false)
        }
    }, [id])

    if (notFound) {
        return <h2>Project not found</h2>
    }

    return (
        <>
            {feed.map((item) => (
                <h1 key={item.id}>{item.title}</h1>
            ))}
        </>
    )
}
