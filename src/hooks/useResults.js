import Yelp from '../api/yelp'
import {useState, useEffect} from 'react'
export default () => {
  const [Result, setResult] = useState([]);
  const [Err, setErr] = useState("");

  async function SearchApi(searchTerm) {
    console.log("hi!");
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResult(response.data.businesses);
    } catch (e) {
      setErr("error!");
    }
  }
  useEffect(() => {
    SearchApi("pasta");
  }, []);
  //SearchApi('pasta')

  return [SearchApi, Err, Result];
};
