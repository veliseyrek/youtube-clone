import axios from "axios";



const detailAction = (id) => async (dispatch) => {
  try {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: {
          part: 'contentDetails,snippet,statistics',
          id: id
        },
        headers: {
          'X-RapidAPI-Key': 'afff4fc826msh085b50558fc62c8p1a6563jsn458ae13c664e',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

    await axios.request(options).then(function (response) {
        dispatch({type: 'GET_VIDEO',payload: response.data})
        console.log("Velioldu");
    }).catch(function (error) {
       console.log(error,"Veli"); 
    });

  } catch (error) {
    console.log(error,"Veli");
  }
};

export default detailAction;
