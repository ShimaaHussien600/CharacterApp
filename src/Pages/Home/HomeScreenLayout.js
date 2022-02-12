import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CharacterCard } from "../../Components/CharacterCard";
import Header from "../../Components/Header";
import './Styles.css';
import { useQuery, gql } from '@apollo/client';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Loader from "../../Components/Loader";
import Pagination from '@mui/material/Pagination';

export const SEARCH_QUERY = gql`
query SearchQuery($name: String, $gender: String, $status: String, $species: String, $page: Int) {
    characters(filter:{name:$name , gender: $gender, status: $status, species: $species}, page: $page){
        info{
            pages
            next
          }
        results{
          id
          name
          status
          species
          gender
          location{
            name
            type
          }
          image
        }
      }
  }
`;

const TestLayOutScreen = () => {
    const [searchFilter, setSearchFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState(null);
    const [statusFilter, setStatusFilter] = useState(null);
    const [speciesFilter, setSpeciesFilter] = useState(null);
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const { data, loading } = useQuery(SEARCH_QUERY, {
        variables: {
            name: searchFilter,
            gender: genderFilter, status: statusFilter, species: speciesFilter, page: page
        }
    });
    const CharactesList = data?.characters;

    const navigate = useNavigate();

    const onSearchClicked = (value) => {
        setSearchFilter(value)
    }
    const onCardClicked = (characterID) => {
        navigate(`/character_details/${characterID}/`, { characterID });
    }

    return (
        <div style={{ height: '100%', backgroundColor: "#f1f2f4" }}>
            <Header
                enableSearch={true}
                onClick={(value) => onSearchClicked(value)}
            />
            <div className="container">
                <div className="row justify-content-md-center pt-30">
                    <div className="col col-md-3  pt-10" style={{ maxHeight: '560px' }}>
                        <div className='container ContentView'>
                            <h3 className="darkGreenText">Filter by</h3>
                            <hr className='line' />
                            <strong className="darkGreenText">Gender</strong>
                            <FormGroup>
                                <FormControlLabel control={
                                    <Checkbox checked={genderFilter === "Male"}
                                        onChange={(event) => setGenderFilter(event.target.checked === true ? "Male" : null)} />
                                } label="Male" />
                                <FormControlLabel control={
                                    <Checkbox checked={genderFilter === "Female"}
                                        onChange={(event) => setGenderFilter(event.target.checked === true ? "Female" : null)} />
                                } label="Female" />
                                <FormControlLabel control={
                                    <Checkbox checked={genderFilter === "unknown"}
                                        onChange={(event) => setGenderFilter(event.target.checked === true ? "unknown" : null)} />
                                } label="unknown" />
                            </FormGroup>
                            <hr className='line' />
                            <strong className="darkGreenText">Status</strong>
                            <FormGroup>
                                <FormControlLabel control={
                                    <Checkbox checked={statusFilter === "Alive"}
                                        onChange={(event) => setStatusFilter(event.target.checked === true ? "Alive" : null)} />
                                } label="Alive" />
                                <FormControlLabel control={
                                    <Checkbox checked={statusFilter === "Dead"}
                                        onChange={(event) => setStatusFilter(event.target.checked === true ? "Dead" : null)} />
                                } label="Dead" />
                            </FormGroup>
                            <hr className='line' />
                            <strong className="darkGreenText">Species</strong>
                            <FormGroup>
                                <FormControlLabel control={
                                    <Checkbox checked={speciesFilter === "Human"}
                                        onChange={(event) => setSpeciesFilter(event.target.checked === true ? "Human" : null)} />
                                } label="Human" />
                                <FormControlLabel control={
                                    <Checkbox checked={speciesFilter === "Alien"}
                                        onChange={(event) => setSpeciesFilter(event.target.checked === true ? "Alien" : null)} />
                                } label="Alien" />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row justify-content-md-around justify-content-center ContentView">
                            {loading ? <Loader isLoading={loading} />
                                :
                                (CharactesList ?
                                    <>
                                        {CharactesList.results.map((character, index) => (
                                            <CharacterCard key={character.id} character={character} index={index} onClick={(characterID) => onCardClicked(characterID)} />
                                        ))}
                                        <div style={{ width: '100%', justifyContent: 'center', margin: "30px" }}>
                                            <Pagination count={CharactesList?.info?.pages} page={page} onChange={handleChange} />
                                        </div>
                                    </>
                                    :
                                    <img src="img/noResultFound.png" style={{ width: '60%' }}></img>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TestLayOutScreen;
