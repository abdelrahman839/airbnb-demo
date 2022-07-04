import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"


const Home= ({ exploreData, cardData }) => {

  return (
    <div >
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="https://www.vectorlogo.zone/logos/airbnb/airbnb-tile.svg" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard key={item.img} location={item.location} distance={item.distance} img={item.img} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll 
          scrollbar-hide p-3 -ml-3">
            {cardData?.map((item) => (
              <MediumCard key={item.img} title={item.title} img={item.img} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />

      </main>
        <Footer />

    </div>
  )
}

export default Home;

export const getStaticProps = async () => {
  const exploreData = await fetch('http://links.papareact.com/pyp').then(res => res.json());
  const cardData = await fetch('http://links.papareact.com/zp1').then(res => res.json());

  return {
    props: {
      exploreData,
      cardData,
    }
  }
}


