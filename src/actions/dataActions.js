import {
  FETCH_API_BEGIN,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
} from "./action-types";
import axios from "axios";

const apiEndpoint= "https://applefacilities.review.blueriver.com/index.cfm/_api/json/v1/scv/building/?andOpenGrouping&locationCode%5B0%5D=sqo&or&locationCode%5B2%5D=nwr&or&locationCode%5B4%5D=scv&or&locationCode%5B6%5D=sfo&closeGrouping&fields=buildingname,buildingabbr,lat,lng,black,buildingZone&active=1&cachedwithin=600";

export const fetchAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchAPIBegin());
    return fetch(apiEndpoint)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchAPISuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchAPIFailure(error)));
  };
};

export const fetchAPIBegin = () => ({
  type: FETCH_API_BEGIN
});

export const fetchAPISuccess = data => ({
  type: FETCH_API_SUCCESS,
  payload: data
});

export const fetchAPIFailure = error => ({
  type: FETCH_API_FAILURE,
  payload: { error }
});
