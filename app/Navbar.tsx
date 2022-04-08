import kimchi from './kimchi.png';

export function Navbar(props: { brand: string, links: string[] }) {
  // based on https://www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/
  return (<nav className="bg-green-300 shadow-lg">
    <div className="max-w-6xl mx-auto px-2">
      <div className="flex justify-between">
        <div className="flex space-x-7">
          {/* Website Logo */}
          <div className="flex items-center py-2">
            <div className='flex mr-2'>
              <a href="/">
                <img src={kimchi} alt="Logo" className="h-8 w-8" />
              </a>
              <a className="text-xs align-top mr-2 ml-1" href="https://www.flaticon.com/free-icons/kimchi">[1]</a>
              <span className="font-semibold text-gray-500 text-2xl"><a href="/">Pckl</a></span>
            </div>
          </div>

          {/* Primary Navbar Items */}
          <div className="items-center space-x-1 md:flex">
            <a
              href="/recipes"
              className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
            >Recipes</a
            >

          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}

