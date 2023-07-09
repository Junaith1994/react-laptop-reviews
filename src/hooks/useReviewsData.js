import { useEffect, useState } from "react"

const useReviewsData = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        fetch('review-data.json')
            .then(res => res.json())
            .then(data => setReviewsData(data))
    }, [])

    return [reviewsData, setReviewsData]
}

export default useReviewsData;