export const Navbar = () => {
  return (
    <nav className="container mx-auto py-4 justify-between w-full flex items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="w-14 " alt="logo" />
        <a href="/">
          <span className="text-3xl font-bold">Lilies</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="/" className="text-lg font-semibold">
          Home
        </a>
        <a href="/" className="text-lg font-semibold">
          Login
        </a>
        <button className="">Sign up</button>
      </div>
    </nav>
  );
};
