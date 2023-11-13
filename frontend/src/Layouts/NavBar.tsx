function Navbar() {
  return (
    <>
      <div className="container">
        <div className="navbar-product">
          <img className="img-navbar" src="/img/home.png" alt="" />
          <div className="text-navbar">Trang chủ</div>
          <img className="img-navbar" src="/img/chevron-right.png" alt="" />
          <div className="text-navbar">Đồ họa - Kỹ thuật</div>
          <img className="img-navbar" src="/img/chevron-right.png" alt="" />
          <div className="text-navbar-active">Acer</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
