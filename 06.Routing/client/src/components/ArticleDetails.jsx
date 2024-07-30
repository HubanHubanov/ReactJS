import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';
import {useParams, useLocation, useNavigate, Navigate} from "react-router-dom";

export default function ArticleDetails() {
    const [article, setArticle] = useState({});
    const {articleId} = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // if(true) {
    //     return <Navigate to="/not found" />
    // }

    console.log(location);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`);

            if(response.statusText == "No Content") {
                // navigate("/not-found");
                navigate("PageNotFound");
                return
            }

            const result = await response.json();
            console.log(result);
            setArticle(result);
        })()

    }, []);

  return (
    <div className='p-20'>
              <p className="text-base font-semibold leading-7 text-indigo-600">Article</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{article.title}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
               {article.content}
              </p>
            </div>
  )
}
