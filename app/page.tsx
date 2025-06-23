import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'
import AboutUs from "../components/AboutUs"; 
import StaffingSolutions from '../components/StaffingSolutions';
import CulturalCare from '../components/CulturalCare';
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import Terms from '../components/Terms'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bless Caring Network | Nurse-Led Staffing & Home Care Agency</title>
        <meta name="description" content="Bless Caring Network is Australia's trusted nurse-led staffing and care agency offering personalised support for hospitals, aged care, and home care." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="nursing agency, aged care staffing, home care support, nurse-led healthcare, Australia nursing jobs" />
        <link rel="icon" href="/Bless-Caring-Network-logo-Favicon" />
      </Head>
      <Header />
      <main className="space-y-16">
        <Hero />
        <Services />
        <AboutUs />
        <StaffingSolutions />
        <WhyChoose />
        <Jobs />
        <CulturalCare />
        {/* <CTA /> */}
        <Terms/>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
