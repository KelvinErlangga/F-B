import menuData from '../data/menuData';

export default function Menu() {
  return (
    <section id="our-menu" className="py-12 bg-secondary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our <span className='font-normal'>Menu</span></h2>
        <div className="grid grid-cols-3 gap-8 text-black">
          {menuData.map((item) => (
            <div key={item.id} className="bg-white text-secondary p-4 rounded-lg">
              <img src={item.image} alt={item.name} className="h-96 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-2xl font-semibold">{item.name}</h3>
              <p className="mt-2">{item.description}</p>
              <p className="mt-2 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
