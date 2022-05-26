import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-scrubland-72081.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const reverseProducts = [...data].reverse()
                setProducts(reverseProducts)
            })
    }, []);
    return [products, setProducts]
}
export default useProducts