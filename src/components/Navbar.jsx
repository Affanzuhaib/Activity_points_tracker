const Navbar = () => {
  return (
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://images.squarespace-cdn.com/content/v1/5beacc8f506fbea4c902f7fc/1584430704360-IGO5FEIPJ52UF2AQLETT/Logo+APT+2020.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center font-mono  text-2xl text-teal-600 font-semibold whitespace-nowrap dark:text-white">CBIT Activity Point Tracker</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
  </div>
  </div>
</nav>
  );
};

export default Navbar;
