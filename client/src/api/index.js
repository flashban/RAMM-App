import axios from "axios";

const url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
// const ytubeLinks = "http://127.0.0.1:5000/getalldata";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    const modifiedData = {
      hospitalData: data.data.medicalColleges,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchYoutubeData = async () => {
//   try {
//     // const { data } = await axios.get(ytubeLinks, (res, req)=>{
//     //   res.header("Access-Control-Allow-Origin", "*");
//     // });

//     const { data } = await fetch(ytubeLinks, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     });

//     const modifiedData = {
//       ytubeData: data,
//     };

//     console.log('Data ytube: ', modifiedData);

//     return modifiedData;
//   } catch (error) {
//     console.log(error);
//   }
// };
