import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import decorImage from "./../../assets/Decoration.svg";

import { Organisations } from "./Organisations";
import { Pagination } from "./Pagination";

const StyledWrapper = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 30px;
  }
`;

const StyledDecorImage = styled.img`
  margin-top: 20px;
`;

const StyledFoundationsInfo = styled.p`
  width: 50%;
  margin: 0 auto 50px;
`;

const StyledFoundationsWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    background: transparent;
    font-family: ${fonts.mainFont};
    height: 70px;
    width: 180px;
    margin: 40px 20px;
    border: none;
    font-size: 18px;
    box-sizing: border-box;

    &:focus {
      border: 1px solid ${colors.textDarkGrey};
    }
  }
`;

const StyledBtn = styled.button``;

export const HomeOrganisations = () => {
  const [organisations, setOrganisations] = useState([]);
  const [filter, setFilter] = useState("foundations");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const fetchOrganisations = async () => {
    const response = await axios.get(
      "https://oddaj-rzeczy-e25d2.firebaseio.com/organisations.json"
    );

    setOrganisations(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrganisations(organisations);
  }, []);

  useEffect(() => setCurrentPage(1), [filter]);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  let organisationsData = <h2>Wczytywanie... </h2>;

  if (!loading) {
    const indexOfLastOrg = currentPage * itemsPerPage;
    const indexOfFirstOrg = indexOfLastOrg - itemsPerPage;
    const currentOrgs = organisations[filter].list.slice(
      indexOfFirstOrg,
      indexOfLastOrg
    );

    organisationsData = (
      <StyledWrapper>
        <h2 id="organisations">Komu pomagamy?</h2>{" "}
        <StyledDecorImage src={decorImage} />
        <StyledFoundationsWrapper>
          <button onClick={() => setFilter("foundations")}>Fundacjom</button>
          <button onClick={() => setFilter("ngos")}>
            Organizacjom pozarządowym
          </button>
          <button onClick={() => setFilter("local")}>
            Lokalnym <br /> zbiórkom
          </button>
        </StyledFoundationsWrapper>
        <div>
          {" "}
          <StyledFoundationsInfo>
            {organisations[filter].desc}
          </StyledFoundationsInfo>
          <Organisations organisations={currentOrgs} loading={loading} />
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={organisations[filter].list.length}
          paginate={paginate}
        />
      </StyledWrapper>
    );
  }

  return organisationsData;
};
