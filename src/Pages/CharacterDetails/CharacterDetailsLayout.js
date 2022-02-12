import React from "react";
import Header from "../../Components/Header";
import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import './Styles.css';

export const CHAR_BY_ID_QUERY = gql`
query CharacterByIdQuery($id: ID!){
    character(id:$id){
          id
          name
          status
          species
          type
          gender
          location{
            name
            type
            dimension
            created
          }
          image
          created
      }
    }
`;
const CharacterDetailsLayout = () => {
    const { characterID } = useParams();

    const { data, loading } = useQuery(CHAR_BY_ID_QUERY, {
        variables: {
            id: characterID
        }
    });
    const characterDetails = data?.character

    return (
        <div style={{ height: '100%', backgroundColor: "#f1f2f4" }}>
            <Header />

            <div class="container">
                <div class="row justify-content-md-center pt-30">
                    <div class="row justify-content-md-around justify-content-center ContentView" style={{ minHeight: '370px' }}>
                        {loading ? <Loader isLoading={loading} />
                            :
                            (characterDetails ?
                                <div class="card mb-3" style={{ border: 0 }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={characterDetails?.image} class="img-fluid rounded-start" alt="" />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title titleText">{characterDetails?.name}</h5>

                                                {characterDetails?.species &&
                                                    <p><span class="mdText">Species : </span>{characterDetails?.species}</p>
                                                }
                                                {characterDetails?.status &&
                                                    <p><span class="mdText">Status : </span>{characterDetails?.status}</p>
                                                }
                                                {characterDetails?.gender &&
                                                    <p><span class="mdText">Gender : </span>{characterDetails?.gender}</p>
                                                }
                                                {characterDetails?.type &&
                                                    <p><span class="mdText">Type : </span>{characterDetails?.type}</p>
                                                }
                                                {characterDetails?.location?.name &&
                                                    <p><span class="mdText">Location Name : </span>{characterDetails?.location?.name}</p>
                                                }
                                                {characterDetails?.location?.type &&
                                                    <p><span class="mdText">Location Type : </span>{characterDetails?.location?.type}</p>
                                                }
                                                {characterDetails?.created &&
                                                    <p><span class="mdText">Created on : </span>{(characterDetails?.created).split("T")[0]}</p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <img src="img/noResultFound.png" style={{ width: '60%' }}></img>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CharacterDetailsLayout;
