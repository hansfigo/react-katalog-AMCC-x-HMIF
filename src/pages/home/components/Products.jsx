import { useEffect, useState } from "react"
import { BASE_API_URL } from "../../../constants/api";
import ProductCard from "../../../components/ProductCard";
import Loading from "../../../components/Loading";
import FormSearch from "./FormSearch";

export default function Products() {
  const [product, setProduct] = useState([]); // state untuk menampung data product

    const [isLoading, setIsLoading] = useState(false); // state untuk menampung status loading

    const [error, setError] = useState(null); // state untuk menampung pesan error

    const [searchQuery, setSearchQuery] = useState(''); // state untuk menampung query pencarian

    useEffect(() => {

        // fungsi untuk mengambil data product 
        const fetchProductData = async () => {

            setIsLoading(true) // ketika fetching data dimulai, set isLoading menjadi true

            try {
                const response = await fetch(`${BASE_API_URL}/products`)
                const data = await response.json()

                const products = data.products // ambil data product dari response

                setProduct(products) // set data product ke state

            } catch (error) {
                console.log(error)
                setError(error) // set error ke state
            }

            setIsLoading(false) // ketika fetching data selesai, set isLoading menjadi false
        }

        fetchProductData()
    }, []) // array dependency kosong agar useEffect hanya dijalankan sekali

    const handleSearch = async (e) => {
        e.preventDefault()

        const search = e.target[0].value // ambil value dari input search
        setSearchQuery(search) // set search query ke state

        setIsLoading(true) // ketika fetching data dimulai, set isLoading menjadi true

        try {
            const response = await fetch(`${BASE_API_URL}/products/search?q=${search}`)
            const data = await response.json()

            const products = data.products // ambil data product dari response

            setProduct(products) // set data product ke state

        } catch (error) {
            console.log(error)
            setError(error) // set error ke state
        }

        setIsLoading(false) // ketika fetching data selesai, set isLoading menjadi false
    }

    return (
        <main>          
          <h2 className="mb-28 text-4xl font-bold text-slate-700 text-center">Discover products you&apos;ll love</h2>
          <div className="mb-20">
            
            <FormSearch handleSearch={handleSearch} />
            
          </div>

          {
            error &&
            <p className="text-lg mb-11">Oops! Something went wrong while fetching data.s</p>
          }      

          {
            searchQuery &&
            <>
              <p className="text-lg mb-11">Search results for <b className="font-bold">"{searchQuery}"</b></p>
            </>
          }

          {isLoading ? (
                <Loading />
            ) : (
                // Tampilkan Data Product Jika Tidak Loading
                <>
                    {/* Tampilkan Pesan Jika Product Tidak Ditemukan */}
                    {product.length === 0 && !isLoading && <p>Product tidak ditemukan</p>}

                    {/* Tampilkan data product jika ada */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 sm:gap-x-7 gap-y-9 justify-center">
                        {product.length > 0 && product.map((prod) => (
                            <ProductCard key={prod.id} product={prod} />
                        ))}
                    </div>
                </>
            )}
        </main>    
    )
}