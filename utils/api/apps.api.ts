import {ApiUrl} from '../apiUrl';
import {fake} from '../fake';

async function getAllCategories() {
  try {
    const response = await fetch(ApiUrl.GET_ALL_CATEGORIES);
    if (!response.ok) {
      throw new Error('Failed to create');
    }
  } catch (error: any) {
    return [];
  }
}

async function getAppByCategoryID(categoryID: any) {
  try {
    // const response = await fetch(
    //   `${ApiUrl.GET_APP_BY_CATEGORY_ID}?categoryID=${categoryID}`
    // );
    // if (!response.ok) {
    //   throw new Error('Failed to create');
    // }
    return fake.apps;
  } catch (error: any) {
    return [];
  }
}

async function getDsppByAppID(appID: any) {
  try {
    const response = await fetch(`${ApiUrl.GET_DSPP_BY_APP_ID}?appID=${appID}`);
    if (!response.ok) {
      throw new Error('Failed to create');
    }
    return '';
  } catch (error: any) {
    return false;
  }
}

async function submitUserOpinion(payload: any) {
  try {
    const body = new URLSearchParams({
      appID: payload.appID,
      userName: payload.userName,
      userEmail: payload.userEmail,
      score: payload.score,
    });
    const options = {
      method: 'POST',
      body: body,
    };
    console.log(body);
    const response = await fetch(ApiUrl.SUBMIT_USER_OPINION, options);
    if (!response.ok) {
      throw new Error('Failed to create');
    }
    return true;
  } catch (error: any) {
    return false;
  }
}

export const APIService = {
  getAllCategories,
  getAppByCategoryID,
  getDsppByAppID,
  submitUserOpinion,
};
