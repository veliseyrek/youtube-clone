import axios from "axios";



const searchAction = (keyword) => async (dispatch) => {
  try {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          q: keyword,
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '50',
          order: 'date'
        },
        headers: {
          'X-RapidAPI-Key': 'afff4fc826msh085b50558fc62c8p1a6563jsn458ae13c664e',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
    await axios.request(options).then(function (response) {
        dispatch({type: 'GET_SEARCH',payload: response.data})
    }).catch(function (error) {
       console.log(error); 
    });

  } catch (error) {
    console.log(error);
  }
};

export default searchAction;
