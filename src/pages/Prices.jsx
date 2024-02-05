import Container from "../ui/Container";
import PriceForm from "../ui/PriceForm";

function Prices() {
  return (
    <>
      <div className="bg-background4 flex h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat pt-[120px]">
        <h2 className="text-white">Fill form</h2>
        <PriceForm />
      </div>
    </>
  );
}

export default Prices;

//Ko reikia Prices listui
//1. Kalendoriaus su laisvomis datomis
//2. Kai pasirinksim data, tada is disabled forma virs normalia
//4. Šventės tipas
//6. Užsakymo apytikslis valandų skaičius
//7. Jei tai krikštynos/vestuvės/gimtadienis - Šventės vieta
//5. Jei tai krikštynos/vestuvės/gimtadienis ~Svečių skaičius
//3. Atstumas nuo mažeikių 50km~ +5eu
//8. Miestas(Gali but, kad pagal rajona automatiskai paskaiciuosiu kaina)
