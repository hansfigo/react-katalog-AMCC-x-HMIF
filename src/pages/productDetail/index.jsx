import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_API_URL } from "../../constants/api"
import Loading from "../../components/Loading"

export default function ProductDetail() {
    const { id } = useParams() // mendapatkan id produk dari URL
    const [product, setProduct] = useState(null) // state untuk menampung data product

    const [isLoading, setIsLoading] = useState(false) // state untuk menampung status loading

    const [error, setError] = useState(null) // state untuk menampung error 

    useEffect(() => {
        // fetch data product berdasarkan id

        setIsLoading(true) // set isLoading menjadi true
        const fetchProductDetail = async () => {

            try {
                const response = await fetch(`${BASE_API_URL}/products/${id}`)
                const data = await response.json()

                setProduct(data) // set data product ke state
            } catch (error) {
                setError(error) // set error ke state
            } finally {
                setIsLoading(false) // set isLoading menjadi false
            }
        }

        fetchProductDetail()
    }, [id]) // tambahkan id sebagai dependency, sehingga useEffect akan dijalankan ketika id berubah

    return (
        <>
            {isLoading && <Loading />}
            {error && <p>Error: Menampilkan Detail Produk</p>}

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