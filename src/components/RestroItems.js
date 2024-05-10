import ItemList from "./ItemList";

const RestroMenuItem  = ({data}) => {
    // console.log(data);
    return (
        <div className="w-4/5 my-3 mx-auto shadow-xl">
            <div className="flex justify-between  px-3 weight " >
            <h2 className="font-extrabold text-lg py-2	">{data?.title} ({data?.itemCards.length})</h2>
            <h3 className="py-3">🔽</h3>
            </div>
           <div>
            <ItemList items={data?.itemCards}/>
           </div>
        </div>

        // {w-8/12 mx-auto flex justify-between px-5 py-3 my-3 shadow-xl}
    )
}


export default RestroMenuItem;