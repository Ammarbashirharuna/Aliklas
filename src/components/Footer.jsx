const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Al Ikhlas Trading Co. All Rights
          Reserved.
        </p>
        <span>
          <a href="https://www.privacypolicies.com/live/32ba2e0e-ca75-4f9b-945b-cceb087e2ce7">
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
