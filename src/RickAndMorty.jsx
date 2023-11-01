import GetData from './helpers/GetData'

export const RickAndMorty = () => {

    const {data,handleRes, handleSum, num} = GetData();
    console.log(data);
    
    return (
      <>
        <h1>RickAndMorty {num}</h1>
        <button  onClick={ handleRes }> - 1</button>
        <button  onClick={ handleSum }> + 1</button>
      </>
    )
}
