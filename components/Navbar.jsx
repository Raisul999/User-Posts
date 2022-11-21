import  Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div style={{ background: "#037ffc", height: "4rem", marginTop:0 }}>
                <h2>
                    <Link href='/' style={{ color: "white", margin:"2rem", fontSize:"1.7rem" }}>Post Blogs</Link>
                </h2>
            </div>
        </>
    )
}

export default Navbar
