import { Link, useMatch } from "react-router-dom";
/**
 *
 * @returns Cái url đang khớp với useMatch nào thì nó sẽ khác với mấy thằng còn lại
 */
function Navbar() {
  const homeMatch = useMatch("/");
  const productMatch = useMatch("/products");
  const aboutMatch = useMatch("/about");

  return (
    <nav style={{ display: "flex", gap: 20, padding: 20 }}>
      <Link
        to="/"
        style={{
          color: homeMatch ? "red" : "black",
          fontWeight: homeMatch ? "bold" : "normal",
        }}
      >
        Trang chủ
      </Link>

      <Link
        to="/products"
        style={{
          color: productMatch ? "red" : "black",
          fontWeight: productMatch ? "bold" : "normal",
        }}
      >
        Sản phẩm
      </Link>

      <Link
        to="/about"
        style={{
          color: aboutMatch ? "red" : "black",
          fontWeight: aboutMatch ? "bold" : "normal",
        }}
      >
        Giới thiệu
      </Link>
    </nav>
  );
}

export default Navbar;
