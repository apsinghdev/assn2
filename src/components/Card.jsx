export const Card = ({ price, rating, onClick }) => {
    return (
        <div className="card w-80 h-96 border border-gray-300 rounded-lg overflow-hidden" onClick={onClick}>
            <div className="image-container h-7/10 bg-cover bg-center">
                <img src="https://www.clawhammersupply.com/cdn/shop/articles/how_to_make_beer.jpg?v=1730407302&width=1532"></img>
            </div>
            <div className="text-container p-2 flex flex-col justify-between h-3/10">
                <h1 className="text-md font-semibold">Price: {price}</h1>
                <h2 className="text-md font-semibold">Rating: {rating}</h2>
            </div>
        </div>
    );
};
