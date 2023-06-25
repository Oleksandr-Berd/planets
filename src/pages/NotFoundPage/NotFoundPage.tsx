interface IProps{
    error?: string,
}

const NotFound = ({ error }:IProps) => {
    return (<div>
        <h1>Oop, There something is going wrong</h1>
        <p>{error }</p>
    </div> );
}
 
export default NotFound;