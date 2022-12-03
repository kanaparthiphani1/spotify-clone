
export const getCode = () =>{
    if(new URLSearchParams(window.location.search).get("code")!==null){
        return new URLSearchParams(window.location.search).get("code");
    }
    return null;
}