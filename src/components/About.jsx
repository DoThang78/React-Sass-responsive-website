import React from "react";

const About = () => {
    const [sections] = React.useState([
        {
            id: 1,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5rem"
                    height="2.5rem"
                    fill="currentColor"
                    className="bi bi-handbag"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                </svg>
            ),
            heading: "Digital Maketing",
            text:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quosexercitationem asperiores minus modi.s ",
        },
        {
            id: 2,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5rem"
                    height="2.5rem"
                    fill="currentColor"
                    className="bi bi-tv"
                    viewBox="0 0 16 16"
                >
                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                </svg>
            ),
            heading: "Web and deverlopment",
            text:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quosexercitationem asperiores minus modi.s ",
        },
        {
            id: 3,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5rem"
                    height="2.5rem"
                    fill="currentColor"
                    className="bi bi-layers"
                    viewBox="0 0 16 16"
                >
                    <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                </svg>
            ),
            heading: "Graphics desing",
            text:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quosexercitationem asperiores minus modi.s ",
        },
    ]);

    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h4 className="about__h4">Who we are ?</h4>
                    </div>
                    <div className="col-9">
                        <div className="about__text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                quisquam odio porro eos corporis minus est odit quam fuga incidunt,
                                nesciunt autem veritatis distinctio officiis voluptates. Illo non
                                sunt obcaecati. Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit. Modi quis aperiam excepturi eaque, iste iure! Non, minima?
                                Inventore, architecto, commodi delectus laudantium a, nobis vitae
                                placeat tempora cum sapiente eligendi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mgT-60">
                    {sections.map((section) => (
                        <div className="col-4 " key={section.id}>
                            <div className="about__section ">
                                <div className="about__section-icon">{section.icon}</div>
                                <div className="about__section-heading">
                                    <h6>{section.heading}</h6>
                                </div>
                                <div className="about__section-text">
                                    <p>{section.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
