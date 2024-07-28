export const PUBLIC_AUTH_ENDPOINT = `/api/v1/auth/public`;
export const ADMIN_AUTH_ENDPOINT = `/api/v1/auth/admin`;
export const PUBLIC_UTILITY_ENDPOINT = `/api/v1/utility/public`;
export const PUBLIC_HOME_ENDPOINT = `/api/v1/home/public`;
export const PUBLIC_AFFILIATE_ENDPOINT = `/api/v1/affiliate/public`;
export const ADMIN_AFFILIATE_ENDPOINT = `/api/v1/affiliate/admin`;
export const FLAGEDU_ENDPOINT = `/lp/api/api/leads/create_lead_with_analytics/`;
export const PAGE_API_ROOT = `/api/v2/pages`;
export const SUBAFFILIATE_AUTH_ENDPOINT = `/api/v1/auth/subaffiliate`;

export const USERS_ENDPOINT = PUBLIC_AUTH_ENDPOINT + `/users`;
export const USERS_SIGNUP = PUBLIC_AUTH_ENDPOINT + `/affiliate/register/`;
export const CREATIVE_ENDPOINT = PUBLIC_AFFILIATE_ENDPOINT + `/creatives`;
export const BRAND_ENDPOINT = PUBLIC_AFFILIATE_ENDPOINT + `/brands`;
export const EVEST_ENDPOINT = PUBLIC_AFFILIATE_ENDPOINT + `/evest`;
export const EVEST_ENDPOINT2 = PUBLIC_AFFILIATE_ENDPOINT + `/evest2`;
export const EXNESS_ENDPOINT = PUBLIC_AFFILIATE_ENDPOINT + `/exness`;
export const AVA_ENDPOINT = PUBLIC_AFFILIATE_ENDPOINT + `/ava`;
export const MULTIBANK_ENDPOINT = PUBLIC_AFFILIATE_ENDPOINT + `/multibank`;
export const CAPITAL_ENDPOINT = PUBLIC_AFFILIATE_ENDPOINT + `/capital`;
export const EVETRADE_ENDPOINT = PUBLIC_AFFILIATE_ENDPOINT + `/evetrade`;
export const SPECIAL_SIGNUP_ENDPOINT = PUBLIC_AFFILIATE_ENDPOINT + `/special`;
export const SPECIAL_SIGNUP_ENDPOINT2 = PUBLIC_AFFILIATE_ENDPOINT + `/special2`;

export const FETCH_DASHBOARD_ANALYTICS_ENDPOINT =
  PUBLIC_AFFILIATE_ENDPOINT + `/dashboard-analytics`;
export const FETCH_ADMIN_DASHBOARD_ANALYTICS_ENDPOINT =
  ADMIN_AFFILIATE_ENDPOINT + `/dashboard-analytics`;
export const FETCH_MEDIA_REPORTS_ENDPOINT =
  PUBLIC_AFFILIATE_ENDPOINT + `/media-analytics`;
export const FETCH_ADMIN_MEDIA_REPORTS_ENDPOINT =
  ADMIN_AFFILIATE_ENDPOINT + `/media-analytics`;
export const FETCH_REGISTRATION_REPORTS_ENDPOINT =
  PUBLIC_AFFILIATE_ENDPOINT + `/registration-analytics`;
export const FETCH_ADMIN_REGISTRATION_REPORTS_ENDPOINT =
  ADMIN_AFFILIATE_ENDPOINT + `/registration-analytics`;
export const FETCH_EARNING_REPORTS_ENDPOINT =
  PUBLIC_AFFILIATE_ENDPOINT + `/earning-analytics`;

export const PAYMENT_DETAIL_ENDPOINT =
  PUBLIC_AFFILIATE_ENDPOINT + `/payment-detail`;

export const WITHDRAW_REQUEST_ENDPOINT =
  PUBLIC_AFFILIATE_ENDPOINT + `/withdraws`;

export const FETCH_COUNTRY_ENDPOINT = PUBLIC_UTILITY_ENDPOINT + `/all-country/`;

export const FETCH_DEFAULT_LINK_ENDPOINT =
  PUBLIC_AFFILIATE_ENDPOINT + `/default-links`;

export const CONTACT_US_ENDPOINT = PUBLIC_UTILITY_ENDPOINT + `/contact-us/`;
export const TUTORIALS_ENDPOINT = PUBLIC_UTILITY_ENDPOINT + `/tutorials/all/`;

export const DOCUMENT_UPLOAD_ENDPOINT =
  PUBLIC_AUTH_ENDPOINT + `/document-upload`;

export const SUBAFFILIATE_USERS_ENDPOINT =
  SUBAFFILIATE_AUTH_ENDPOINT + `/users`;

export const COMISSION_RULE_ENDPOINT = ADMIN_AUTH_ENDPOINT + `/comission-rules`;
export const COMISSION_RULE_VALUE_ENDPOINT =
  ADMIN_AUTH_ENDPOINT + `/comission-values`;
export const COMISSION_RULE_VALUE_EXTRA_ENDPOINT =
  ADMIN_AUTH_ENDPOINT + `/comission-values-extras`;
