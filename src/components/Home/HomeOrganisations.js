import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import { colors, fonts } from "./../../styles/styles";
import decorImage from "./../../assets/Decoration.svg";

import { Organisations } from "./Organisations";
import { Pagination } from "./Pagination";

const StyledDecorImage = styled.img`
  margin-top: 20px;
`;

const HomeOrganisations = () => {
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
      <section>
        <h2 id="organisations">Komu pomagamy?</h2>
        <StyledDecorImage src={decorImage} />
        <button onClick={() => setFilter("foundations")}>Fundacjom</button>
        <button onClick={() => setFilter("ngos")}>
          Organizacjom pozarządowym
        </button>
        <button onClick={() => setFilter("local")}>Lokalnym zbiórkom</button>
        <div>
          {" "}
          <p>{organisations[filter].desc}</p>
          <Organisations organisations={currentOrgs} loading={loading} />
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={organisations[filter].list.length}
          paginate={paginate}
        />
      </section>
    );
  }

  return organisationsData;
};

export default HomeOrganisations;
