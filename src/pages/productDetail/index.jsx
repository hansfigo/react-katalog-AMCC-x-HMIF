import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { BASE_API_URL } from "../../constants/api"
import Loading from "../../components/Loading"

export default function ProductDetail() {
    const {pathname} = useLocation();

    
    const { id } = useParams() // mendapatkan id produk dari URL
    const [product, setProduct] = useState(null) // state untuk menampung data product
    
    const [isLoading, setIsLoading] = useState(false) // state untuk menampung status loading
    
    const [error, setError] = useState(null) // state untuk menampung error 
    
    useEffect(() => {
        // supaya ketika berpindah ke halaman productDetail, scroll keatas
        window.scrollTo(0, 0);
    }, [pathname]);
    
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
        <main className="pt-40 h-screen min-h-[700px]">            
            {isLoading && <Loading />}
            {error && <p className="text-lg ">Error: Menampilkan Detail Produk</p>}
            {
                product && (
                <div className="">
                    <div className="flex flex-col items-center gap-16 md:items-start md:flex-row">
                        <div className="md:w-2/5">
                            <div className="group">
                                <img src={product.thumbnail} alt={product.title} className="transition w-full group-hover:scale-110" />
                            </div>
                        </div>
                        <div className="space-y-4 md:w-3/5">
                            <h1 className="text-4xl font-bold">{product.title}</h1>
                            <p className="text-3xl font-semibold"><strong className="font-bold">$</strong> {product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
                )
            }            
        </main>    
    )
}