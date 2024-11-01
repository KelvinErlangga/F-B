export default function Footer() {
  return (
    <footer className="bg-white pt-8 text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {/* Kolom 1: Logo dan link navigasi */}
        <div className="flex flex-col items-center ">
          <img src="/logo.png" alt="Richeese Factory Logo" className="h-16 mb-2" />
          <ul className="space-y-1 text-center md:text-left">
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Discovery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 2: Link besar dan social media */}
        <div className="flex flex-col items-center">
          <ul className="space-y-1 text-center">
            <li>
              <a href="#" className="hover:underline">
                Big Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Birthday
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
          <div className="flex space-x-3 mt-2">
            {/* Ikon sosial media */}
            <a href="#">
              <img src="https://static.vecteezy.com/system/resources/previews/023/986/502/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png" alt="Instagram" className="h-5" />
            </a>
            <a href="#">
              <img src="https://static.vecteezy.com/system/resources/previews/023/741/129/non_2x/tiktok-logo-icon-social-media-icon-free-png.png" alt="TikTok" className="h-5" />
            </a>
            <a href="#">
              <img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png" alt="Facebook" className="h-5" />
            </a>
            <a href="#">
              <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png" alt="YouTube" className="h-5" />
            </a>
          </div>
        </div>

        {/* Kolom 3: Peta dan Halal */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-1">Find nearby Mr Suprek</h4>
          <div className="w-36 h-28 bg-gray-200">
            {" "}
            {/* Placeholder untuk peta */}
            <img src="/map.png" alt="Map" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Kritik dan Saran serta Halal logo */}
      <div className="container mx-auto  md:flex-row justify-between items-center mt-6 border-t border-gray-200 pt-4">
        <div className="flex flex-col items-center ">
          <img src="/halal.png" alt="Halal logo" className="h-10 mb-1" />
          <p className="text-sm text-gray-700">Kritik & Saran</p>
          <p className="text-sm text-gray-700">ms-comments@mrsuprek.com</p>
        </div>
      </div>

      {/* Warna kuning di bagian bawah */}
      <div className="bg-red-600 py-4 mt-4">
        <div className="text-center text-sm text-white">&copy; 2024 Mr Suprek</div>
      </div>
    </footer>
  );
}
