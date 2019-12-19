import React, { useState } from "react";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import decorImage from "./../../assets/Decoration.svg";
import { connect } from "react-redux";

const StyledDecorImage = styled.img`
  margin-top: 20px;
`;

const HomeOrganisations = props => {
  console.log(props);

  const [filter, setFilter] = useState("foundations");

  const { foundations, ngos, local } = props;
  console.log(props[filter].list.map(item => console.log(item)));

  return (
    <section>
      <h2 id="organisations">Komu pomagamy?</h2>
      <StyledDecorImage src={decorImage} />
      <button onClick={() => setFilter("foundations")}>Fundacjom</button>
      <button onClick={() => setFilter("ngos")}>
        Organizacjom pozarządowym
      </button>
      <button onClick={() => setFilter("local")}>Lokalnym zbiórkom</button>
      <div>
        {foundations.list.map(item => {
          return (
            <article key={item.id}>
              <h3>Fundacja {item.name}</h3>
              <p>{item.goal}</p>
              <p>{item.needs}</p>
            </article>
          );
        })}
        {/* <p>{props.[filter].map(item => console.log(item))}</p> */}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    foundations: state.organisations.foundations,
    ngos: state.organisations.ngos,
    local: state.organisations.local
  };
};

export default connect(mapStateToProps)(HomeOrganisations);
