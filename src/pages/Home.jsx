import Button from "../ui/Button";

function Home() {
  return (
    <div className="h-dvh bg-background bg-center bg-no-repeat pt-[120px] text-center text-stone-200">
      <h1 className="text-[60px] uppercase tracking-widest">FotoInga</h1>
      <h2 className="text-md mb-8 mt-[-6px] capitalize">
        Professional Lithuanian Photographer
      </h2>
      <Button location="/about">Get Started</Button>
    </div>
  );
}

export default Home;
