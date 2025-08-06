const RestaurantCard = ({ resData }) => {
    // console.log(props);

    const { name, cuisine, rating, avgTime, image } = resData.data
    return (
        <div className="res-card">
            <img src={image} alt="biryani"
                className="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{avgTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;