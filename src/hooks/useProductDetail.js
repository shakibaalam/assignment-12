import { useEffect, useState } from "react";

const useProductDetail = (id) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://sheltered-scrubland-72081.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);
    return [product, setProduct];
}
export default useProductDetail;