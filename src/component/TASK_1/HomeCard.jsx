

const HomeCard = ({ items }) => {
    const { Title, Description1, Description2 } = items[0]
    return (
        <div className="mt-8">
            <h2 className="mb-5 font-semibold text-2xl">{Title}</h2>
            <p>{Description1}</p>
            <p>{Description2}</p>
        </div>
    );
};

export default HomeCard;