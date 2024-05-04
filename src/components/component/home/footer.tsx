
const Footer = () => {
  return (
    <div className="w-full border-t-2 h-1 border-green flex gap-2">
      <div className="w-full">
        <ul className="p-4 w-full flex flex-wrap justify-center gap-2 text-green text-sm">
          <li>Contact us</li>
          <li>FAQ</li>
          <li>Support</li>
          <li className="w-full text-center">Developed by: Dawid Pioś</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
