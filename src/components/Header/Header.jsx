import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className=" container mx-auto max-w-screen-xl my-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-center font-extrabold">Knowledge Cafe</h1>
        <img className="" src={profile} alt="" />
      </div>
      <hr className='my-6' />
    </header>
  );
};

export default Header;
