import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();
  const { houses = [] } = router.query;
  console.log(houses);

  if (houses.length === 1) {
    return <h1> Minimum Budget is {houses[0]}</h1>;
  }

  if (houses.length === 2) {
    return (
      <h1>
        Minimum Budget is {houses[0]} and Maximum Budget is {houses[1]}
      </h1>
    );
  }

  return <h1>No houses found</h1>;
};

export default Docs;
