namespace countryList;

using { API_COUNTRY_SRV as country } from '../srv/external/API_COUNTRY_SRV';

entity Countries as projection on country.A_Country;
