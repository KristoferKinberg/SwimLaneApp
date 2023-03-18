import {useEffect, useState} from "react";
import {APIPerson, fetchProducts} from "./request";

const App = () => {
  const [data, setData] = useState<APIPerson[]>([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="App">

    </div>
  )
}

export default App
