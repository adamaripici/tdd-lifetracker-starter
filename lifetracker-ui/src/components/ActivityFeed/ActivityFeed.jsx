import * as React from "react"
import { useNavigate, Link} from "react-router-dom"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import apiClient from "../../services/apiClient"
import SummaryStat from "components/SummaryStat/SummaryStat"

export default function ActivityFeed(props) {
    const [activity, setActivity] = React.useState([])
    const [newActivity, setNewActivity] = React.useState([])
    const [error, setError] = React.useState() 
    async function getActivity(){
        const {data, err} = await apiClient.fetchActivity()
        console.log(48,data)
        if(err) setError(err)
        if(data){
          setActivity(data.totalPerDay)
          setNewActivity(data.avgPerDay)
        }
        console.log(100,data.avgPerDay)
        console.log(500,data.totalPerDay)
        console.log(200,activity)
        }
        React.useEffect(() => {
            getActivity()
          }, []);
        return (
            <div className="activity-feed">
                <div>
                {activity.map((item) => {return(
                <SummaryStat key = {item.id} date={item.date} sum={item.sum}/>
            )})}
                </div>
                <div>
                {newActivity.map((item) => {return(
                <SummaryStat key = {item.id} category={item.category} avg={item.avg}/>
            )})}
                </div>
            
            </div>
            
        )
}
