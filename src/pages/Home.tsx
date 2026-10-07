import Collections from '../components/Collections'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import ProductShowcase from '../components/ProductShowcase'
import PromoBanners from '../components/PromoBanners'
import ServiceStrip from '../components/ServiceStrip'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Collections />
      <FeaturedProducts />
      <ServiceStrip />
      <div className="pt-14" />
      <PromoBanners />
      <Newsletter />
    </>
  )
}
