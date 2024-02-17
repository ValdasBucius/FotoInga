import Container from "../ui/Container";
import PriceForm from "../ui/PriceForm";

function Prices() {
  return (
    <div className="absolute top-0 -z-20 min-h-screen min-w-full bg-background4">
      <Container>
        <div className="pt-[80px] text-center text-stone-200">
          <h2 className="mb-2 text-left text-[30px] uppercase tracking-widest">
            Prices
          </h2>
          <PriceForm />
        </div>
      </Container>
    </div>
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
