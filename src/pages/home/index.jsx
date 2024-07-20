import { useEffect, useState } from "react"
import { BASE_API_URL } from "../../constants/api";
import ProductCard from "../../components/ProductCard";

export default function Home() {

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
        <>
            {/* Ketika Error , Tampilkan Pesan Error */}
            {error && <p>Error Saat Fetching <Datal></Datal></p>}

            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search Product" className="border border-gray-400 p-2 rounded-lg" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Search</button>
            </form>

            {searchQuery && <p>Hasil Pencarian untuk "{searchQuery}"</p>}

            {/* Tampilkan Loading Jika isLoading True */}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                // Tampilkan Data Product Jika Tidak Loading
                <>
                    {/* Tampilkan Pesan Jika Product Tidak Ditemukan */}
                    {product.length === 0 && !isLoading && <p>Product tidak ditemukan</p>}

                    {/* Tampilkan data product jika ada */}
                    <div className="flex flex-wrap gap-4 justify-between">
                        {product.length > 0 && product.map((prod) => (
                            <ProductCard key={prod.id} product={prod} />
                        ))}
                    </div>
                </>
            )}
        </>
    )
}