import React from "react";

const Portfolio = () => {
    const [cards] = React.useState([
        {
            id: 1,
            image: "/images/01.jpg",
            name: "Shakil Khan",
            expert: "ReactJS",
        },
        {
            id: 2,
            image: "/images/02.jpg",
            name: "Randal Kell",
            expert: "React Native",
        },
        {
            id: 3,
            image: "/images/03.jpg",
            name: "Joe Ratter",
            expert: "VueJS",
        },
    ]);
    return (
        <div className="portfolio">
            <div className="container">
                <div className="row portfolio__section">
                    <div className="col-4 portfolio__content ">
                        <h6 className="portfolio__content-h6">EMPLOYEES</h6>
                        <h3 className="portfolio__content-h3">OUR TEAM.</h3>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {cards.map((card) => (
                                <div className="col-4 z-index pl-10" key={card.id}>
                                    <div className="portfolio__card ">
                                        <img
                                            className="portfolio__card-img"
                                            src={card.image}
                                            alt=""
                                        />
                                        <h5 className="portfolio__card-name">{card.name}</h5>
                                        <p className="portfolio__card-expert">{card.expert}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
