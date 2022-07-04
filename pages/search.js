import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
import { format } from "date-fns"
import InfoCard from "../components/InfoCard"

const Search = ({ searchResults }) => {

    const router = useRouter();
    const { location, startDate, endDate, noOfGuest } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMM yyyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div>
            <Head>
                <title>Serach</title>
                <link rel="icon" href="https://www.vectorlogo.zone/logos/airbnb/airbnb-tile.svg" />
            </Head>
            <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs ">300+ Stays - {range} - for {noOfGuest} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexiblility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>

                   <div className="flex flex-col">
                   {searchResults?.map(({img,location,description,title,star,total,price})=>(
                        <InfoCard
                        key={img}
                        img={img}
                        location={location}
                        description={description}
                        title={title}
                        star={star}
                        total={total}
                        price={price}
                        />
                    ))}
                   </div>
                </section>
            </main>

            <Footer />

        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch('http://links.papareact.com/isz').then(res => res.json());
return {
    props:{
        searchResults
    }
}
}