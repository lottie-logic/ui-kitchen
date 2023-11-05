import React from "react";

const KittenCards: React.FC = () => {
  const cards = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <>
      {cards.map((cardNumber) => (
        <div
          key={cardNumber}
          className="bg-cover bg-center h-14 rounded-lg shadow-lg"
          style={{
            backgroundImage: `url('https://placekitten.com/g/300/300')`,
          }}
        >
          <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg h-full">
            <h2 className="text-white text-xl font-bold mb-2">
              Card {cardNumber}
            </h2>
            <p className="text-white">Some additional content can go here.</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default KittenCards;
