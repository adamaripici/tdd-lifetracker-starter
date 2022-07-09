import * as React from "react"
import {Routes, Route} from 'react-router-dom';
import "./NutritionPage.css"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import NutritionOverview from "components/NutritionOverview/NutritionOverview";
import NewPostForm from "components/NewPostForm/NewPostForm";
import NutritionNew from "components/NutritionNew/NutritionNew";
import NutritionDetail from "components/NutritionDetail/NutritionDetail";
import { useState } from "react";

export default function NutritionPage(props) {
    const [fruit, setFruit] = useState([])
        return (
            <div className="nutrition-page">
                <h1 className="intro">Nutrition Page</h1>
                <NewPostForm user = {props.user} fruit={props.fruit} setFruit={setFruit}/>
                <Routes>
                    <Route path="/" element={<NutritionOverview user={props.user} fruit={fruit}/>}/>
                    <Route path="/create" element={<NutritionNew  user={props.user} fruit={fruit} setFruit={setFruit} />}/>
                    <Route path="/id/:nutritionId" element={<NutritionDetail user={props.user} />}/>
                    <Route path="/*" element={<AccessForbidden/>}/>
                </Routes>
                
            </div>
        )
}