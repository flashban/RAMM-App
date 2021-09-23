import axios from "axios";

const url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";

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
