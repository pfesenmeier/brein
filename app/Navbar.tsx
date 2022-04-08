import kimchi from './kimchi.png';

export function Navbar(props: { brand: string, links: string[] }) {
  return (<nav className="bg-green-300 shadow-lg">
    <div className="max-w-6xl mx-auto px-2">
      <div className="flex justify-between">
        <div className="flex space-x-7">
          {/* Website Logo */} 
          <div>
            <a href="https://www.flaticon.com/free-icons/kimchi" className="flex items-center py-4 px-2">
              <img src={kimchi} alt="Logo" className="h-8 w-8 mr-2" />
              <span className="font-semibold text-gray-500 text-2xl">Pckl</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}

