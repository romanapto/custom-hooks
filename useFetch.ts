import React, { useEffect, useState } from 'react'

const localCache:any = {};

export const useFetch = (url:string) => {
 
    const [state, setstate] = useState({
        data: null,
        isLoading: 1,
        hasError: false,
        error:null
    });

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = ()=>{
        setstate({
            data: null,
            isLoading: 2,
            hasError: true,
            error: null
        });
    }
    
    const getFetch = async()=>{

        if( localCache[url]){
            console.log('Usando cache');
            setstate({
                data: localCache[url],
                isLoading: 0,
                hasError: false,
                error:null 
            })
            return;
        }
        setLoadingState();
        const resp = await fetch(url);
        await new Promise(resolve=>setTimeout(resolve,1500))
        if ( !resp.ok) {
            setstate({
                data: null,
                isLoading: 0,
                hasError: true,
                error: null
            });
            return;
        }
        const data = await resp.json();
        setstate({
            data: data,
            isLoading:0,
            hasError:false,
            error:null
        })
        localCache[url] = data;
        console.log(data);
    }
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }

}
