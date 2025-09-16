import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsData from "../components/NewsData";



const Category = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(()=>{
        if (id == "0") {
            setCategoryNews(data);
            return;
        } else if(id == "1"){
            const filterData = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filterData)
        }else{
            const filterData = data.filter(news => news.category_id == id);
            setCategoryNews(filterData)
        }
        
        
    }, [data, id]);
    
    return (
        <div>
            <h1 className='font-bold'>Category News -{categoryNews.length}</h1>

            <div>
                {
                    categoryNews.map(news => <NewsData key={news.id} news={news} ></NewsData>)
                }
            </div>
        </div>
    );
};

export default Category;