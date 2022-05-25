import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const reverseProducts = [...data].reverse()
                setProducts(reverseProducts)
            })
    }, []);
    return [products, setProducts]
}
export default useProducts