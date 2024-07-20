import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_API_URL } from "../../constants/api"

export default function ProductDetail() {
    const { id } = useParams() // mendapatkan id produk dari URL
    const [product, setProduct] = useState(null) // state untuk menampung data product

    useEffect(() => {
        // fetch data product berdasarkan id
        const fetchProductDetail = async () => {
            const response = await fetch(`${BASE_API_URL}/products/${id}`)
            const data = await response.json()

            setProduct(data) // set data product ke state
        }

        fetchProductDetail()
    }, [id]) // tambahkan id sebagai dependency, sehingga useEffect akan dijalankan ketika id berubah

    return (
        <>
            {product && (
                <div>
                    <h1>{product.title}</h1>
                    <img src={product.thumbnail} alt={product.title} />
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            )}
        </>
    )
}