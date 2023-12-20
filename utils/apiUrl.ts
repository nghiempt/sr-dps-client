export const BASE_URL = 'https://api.nsci.id.vn/api/v1';

export const ApiUrl = {
  GET_ALL_CATEGORIES: `${BASE_URL}/category/get-all`,
  GET_APP_BY_CATEGORY_ID_USER_ID: `${BASE_URL}/app/get-by-category-id-and-user-id?`,
  GET_APP_BY_CATEGORY_ID: `${BASE_URL}/app/get-by-category-id?`,
  SAVE_OPINION: `${BASE_URL}/user-opinion/submit-opinion`,
  CLEAR_ALL_OPINION: `${BASE_URL}/user-opinion/clear-all-score?`,
  GET_TEAM_INFO: `${BASE_URL}/info/get-team-info`,
  GET_PROJECT_INFO: `${BASE_URL}/info/get-project-info`,
  GET_CONCEPT: `${BASE_URL}/info/get-concept-description`,
  GET_GOOGLE_EXCEPTION: `${BASE_URL}/info/get-google-exception`,
  SIGN_IN: `${BASE_URL}/user/sign-in`,
};
