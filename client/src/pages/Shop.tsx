import Header from '../components/headers/Header';
import DepositItem from '../components/DepositCard';

const Shop = () => {
  const handleDeposit = (amount: number, price: number) => {
    console.log(`Depositing ${amount} coins for ${price} PHP`);
    // Add your payment processing logic here
  };

  // Different deposit package options
  const depositOptions = [
    { amount: 50, price: 50.00 },
    { amount: 100, price: 95.00 },
    { amount: 200, price: 180.00 },
    { amount: 500, price: 425.00 },
    { amount: 1000, price: 800.00 },
    { amount: 2000, price: 1500.00 },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header 
        title="Shop" 
        balance={1000} 
        onProfileClick={() => {}}
        activePage="shop"
      />
      
      <div className="flex flex-1 overflow-hidden bg-gray-900">
        
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold text-white mb-6">Buy Game Coins</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24">
            {depositOptions.map((option) => (
              <DepositItem
                key={option.amount}
                amount={option.amount}
                price={option.price}
                onClick={() => handleDeposit(option.amount, option.price)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;