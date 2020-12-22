import Link from "next/link";

const products = () => {
  return (
    <div>
      <h1>Produtos</h1>
      <Link href="/category/product">
        <a>Navegar para produto</a>
      </Link>
    </div>
  );
};

export default products;
