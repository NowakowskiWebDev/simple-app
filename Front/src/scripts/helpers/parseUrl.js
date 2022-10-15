/**
 * Parse current url and break it into resource, id and verb.
 * @return {Object} Path params.
 */
 export const parseUrl = () => {
    const path = location.pathname.slice(1).toLowerCase() || '/';
  
    const params = path.split('/');
  
    return  {
      view: params[0] || null,
      id: params[1] || null,
    };
};