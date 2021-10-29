import "./widgetLg.css";
import { Visibility } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import { useHistory } from 'react-router-dom';
import { useEffect,useState } from "react";

export default function WidgetLg() {

  const [data, setData] = useState();
  const [res, setResult] = useState([]);
  // const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

//   const columns = [
//     {field: 'firstname+""'+'lastname', headerName: 'Name',width:50 },
//     {field: 'designation', headerName: 'Designation', width: 150},
//     {field: 'source', headerName: 'Source', width: 150},
//     {field: 'destination', headerName: 'Destination', width: 150},
    
//     <th className="widgetLgStatus">       
//     <Button type="Request" />
//  </th>
//   ]

  const[result,setValues]=useState([]);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9000/api/user/get`,config);
    setValues(result.data);
    console.log(result.data)
  };
  useEffect(() => {
   console.log("useeffect");
    loadUser();
    
   
}, []);

const config = {
  headers: authHeader()
};

const hist = useHistory();
  
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Owner Details</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Source</th>
          <th className="widgetLgTh">Destination</th>
          <th className="widgetLgTh">Details</th>
          <th className="widgetLgTh">Ride Request</th>
        </tr>
       

         
         
            
        {result.map((x) => {
          return <tr className="widgetLgTr">
          <th className="widgetLgName" ><label key={x.id}>{x.firstname+" "}{x.lastname}</label></th>
          <th className="widgetLgSource" ><label key={x.id}>{x.source}</label></th>
          <th className="widgetLgDestination"><label key={x.id}>{x.destination}</label></th>
          
          <th className="widgetLgStatus">
            <button  className="widgetSmButton" onClick={() => hist.push("/view")}>
              <Visibility className="widgetSmIcon" />
              View 
              </button>
          </th>

          <th className="widgetLgStatus">
            <Button type="Request" />
          </th>

          
    
          </tr>
        })}

{/* < div style={{height: 700, width: '100%'}}>
          <DataGrid
            rows={res}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div> */}
        
      
        
      
      </table>
    </div>
  );
}
