function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-800">

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Airbnb Plus</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Accessibility</h5>
            <p>This is not a real site</p>
            <p>Its is awesome clone</p>
            <p>referrals accepted</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Host</h5>
            <p>Codefam</p>
            <p>Software Engineer</p>
            <p>Full Stack</p>
        </div>
  
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Secure</p>
        </div>

    </footer>
  )
}

export default Footer