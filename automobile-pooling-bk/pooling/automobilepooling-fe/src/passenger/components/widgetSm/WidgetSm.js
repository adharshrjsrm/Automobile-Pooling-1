import "./widgetSm.css";
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import { useEffect,useState } from "react";
import {Favorite} from "@material-ui/icons";

export default function WidgetSm() {
  const config = {
    headers: authHeader() 
  };

  const[res,setValues]=useState([]);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9000/api/favorite/get`,config);
    setValues(result.data);
    console.log(result.data)
  };
  useEffect(() => {
   console.log("useeffect");
    loadUser(); 
},[]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Favorites <Favorite className="sidebarFavorite" /></span>
      <table className="widgetLgTable">
                            <tr className="widgetLgTr">
                               
                                <th className="widgetLgTh">Name</th>                                
                                <th className="widgetLgTh">Designation</th>
                                
                            </tr>

                            <tbody>

                                {res.map((x) => {
                                    return <tr>
                                        <td className="widgetLgGet" ><label key={x.id}>{x.favorite.firstname+" "}{x.favorite.lastname}</label></td>
                                        <td className="widgetLgGet" ><label key={x.id}>{x.favorite.designation}</label></td>
                                    </tr>
                                })}
      </tbody>
      </table>
      </div>
    
  );
}
