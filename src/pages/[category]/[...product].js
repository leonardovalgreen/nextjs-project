import { useRouter } from "next/router";

const product = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{`${router.query.category} - ${router.query.product}`}</h1>
    </div>
  );
};

export default product;
