/**
 * Parse current url and break it into resource, id and verb.
 * @return {Object} Path params.
 */
 export const parseRequestUrl = () => {
    const path = location.pathname.slice(1).toLowerCase() || '/';
  
    const params = path.split('/');
  
    const request = {
      resource: params[0] || null,
      id: params[1] || null,
    };
  
    return request;
  };