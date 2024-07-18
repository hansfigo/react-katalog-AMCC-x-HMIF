export default function Container({ children }) {
    return (
        <section className='w-full h-screen flex justify-center'>
            <div className="container flex min-h-full flex-col justify-between">
                {children}
            </div>
        </section>
    )
}