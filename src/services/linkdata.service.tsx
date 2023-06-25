import config from "../config.json";
import httpService from "./httpService";

const domainUrl = config.linktree.domainUrl;
const endPoint = config.linktree.endPoint;

/**
 * This service will call the app script api.
 * This api will return the array of object
 * for link data.
 * @returns
 */
export const GetLinksData = () => {
  const URL = domainUrl + endPoint;
  return httpService.get(URL);
};
