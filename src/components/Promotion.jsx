import promoData from '../data/promoData';

export default function Promotions() {
  return (
    <section id="promo" className="py-12 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Promotions</h2> {/* Change to text-black */}
        <div className="grid grid-cols-2 gap-8">
          {promoData.map((promo) => (
            <div key={promo.id} className="bg-white p-6 rounded-lg">
              <div className="overflow-hidden rounded-t-lg mb-4">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover" // Ensure the image covers the full area while maintaining its aspect ratio
                />
              </div>
              <h3 className="text-2xl font-semibold text-black">{promo.title}</h3> {/* Change to text-black */}
              <p className="mt-2 text-black">{promo.description}</p> {/* Change to text-black */}
              <button className="mt-4 bg-accent text-black py-2 px-4 rounded-lg">Get Offer</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
