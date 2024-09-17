import { gql } from "@apollo/client";



export const GET_COUNTRIES = gql`
    query GetCountries {
    countries {
        code
        name
        }
    }
`


export const GET_COUNTRY_DETAILS = gql`
query GetCountryDetails($code :ID!){
    country(code : $code){
        name
        native
        capital
        currency
        languages {
        code
        name
        }
    }
}
`