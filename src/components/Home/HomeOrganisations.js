import React from "react";
import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import decorImage from "./../../assets/Decoration.svg";
import { connect } from "react-redux";

const StyledDecorImage = styled.img`
  margin-top: 20px;
`;

const HomeOrganisations = props => {
  console.log(props);

  const { foundations, ngos, local } = props;
  return (
    <section>
      <h2 id="organisations">Komu pomagamy?</h2>
      <StyledDecorImage src={decorImage} />
      {foundations.list.map(item => {
        return (
          <article key={item.id}>
            <h3>Fundacja {item.name}</h3>
            <p>{item.goal}</p>
            <p>{item.needs}</p>
          </article>
        );
      })}
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
