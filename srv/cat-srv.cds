using { countryList as cl } from '../db/cat-db';

service CountryService {
    @readonly entity Countries as projection on cl.Countries;
}