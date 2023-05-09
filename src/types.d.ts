export interface Page {
  page?: number;
  results?: Movie[];
  total_pages?: number;
  total_results?: number;
}

export interface Movie {
  adult?: boolean;
  backdrop_path?: null | string;
  genre_ids?: number[];
  id?: number;
  original_language?: any;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface stream {
  AD?: Ad;
  AE?: AE;
  AG?: AE;
  AL?: AE;
  AR?: AE;
  AT?: AE;
  AU?: AE;
  BA?: AE;
  BE?: AE;
  BG?: AE;
  BO?: AE;
  BR?: AE;
  CA?: AE;
  CH?: AE;
  CI?: AE;
  CL?: AE;
  CO?: AE;
  CR?: AE;
  CU?: Ad;
  CV?: AE;
  CZ?: AE;
  DE?: AE;
  DK?: AE;
  DO?: AE;
  EC?: AE;
  EE?: AE;
  EG?: AE;
  ES?: AE;
  FI?: AE;
  FJ?: AE;
  FR?: AE;
  GB?: AE;
  GH?: AE;
  GR?: AE;
  GT?: AE;
  HK?: AE;
  HN?: AE;
  HR?: AE;
  HU?: AE;
  ID?: AE;
  IE?: AE;
  IL?: AE;
  IN?: AE;
  IS?: AE;
  IT?: AE;
  JM?: AE;
  JP?: AE;
  KR?: AE;
  LT?: AE;
  LV?: AE;
  MD?: AE;
  MK?: AE;
  MT?: AE;
  MU?: AE;
  MX?: AE;
  MY?: AE;
  MZ?: AE;
  NE?: AE;
  NL?: AE;
  NO?: AE;
  NZ?: AE;
  PA?: AE;
  PE?: AE;
  PH?: AE;
  PK?: Ad;
  PL?: AE;
  PT?: AE;
  PY?: AE;
  RO?: Ad;
  RS?: Ad;
  RU?: AE;
  SA?: AE;
  SE?: AE;
  SG?: AE;
  SI?: AE;
  SK?: AE;
  SN?: AE;
  SV?: Sv;
  TH?: AE;
  TR?: AE;
  TT?: AE;
  TW?: AE;
  TZ?: AE;
  UG?: AE;
  US?: AE;
  UY?: AE;
  VE?: AE;
  ZA?: AE;
  ZM?: AE;
}

export interface Ad {
  link?: string;
  flatrate?: Flatrate[];
}

export interface Flatrate {
  logo_path?: string;
  provider_id?: number;
  provider_name?: string;
  display_priority?: number;
}

export interface AE {
  link?: string;
  buy?: Flatrate[];
  rent?: Flatrate[];
  flatrate?: Flatrate[];
  ads?: Flatrate[];
}

export interface Sv {
  link?: string;
  rent?: Flatrate[];
}

export interface Series {
  adult?: boolean;
  backdrop_path?: string;
  created_by?: CreatedBy[];
  episode_run_time?: number[];
  first_air_date?: String;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: Date;
  last_episode_to_air?: LastEpisodeToAir;
  name?: string;
  next_episode_to_air?: null;
  networks?: Network[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: Network[];
  production_countries?: ProductionCountry[];
  seasons?: Season[];
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  type?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface CreatedBy {
  id?: number;
  credit_id?: string;
  name?: string;
  gender?: number;
  profile_path?: null;
}

export interface Genre {
  id?: number;
  name?: string;
}

export interface LastEpisodeToAir {
  id?: number;
  name?: string;
  overview?: string;
  vote_average?: number;
  vote_count?: number;
  air_date?: Date;
  episode_number?: number;
  production_code?: string;
  runtime?: null;
  season_number?: number;
  show_id?: number;
  still_path?: null;
}

export interface Network {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

export interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

export interface Season {
  air_date?: Date;
  episode_count?: number;
  id?: number;
  name?: string;
  overview?: string;
  poster_path?: string;
  season_number?: number;
}

export interface SpokenLanguage {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
}
