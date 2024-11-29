import { Button } from "@/shared"

const ItemDetailPage = ({ params } : { params : {id : string }}) => {

    const bigImg = "";
    const smallImages: string[] = ["","","","",""];

    return (
        <div className="flex justify-center w-full h-screen">

            <div className = "mr-4 p-4">
                <h1 className="font-bold text-2xl mb-4">디테일 페이지{params.id}</h1>
                <img src={bigImg} alt="No Image Available" className = "w-full h-96 bg-gray-200 rounded mr-4" />
                <div className="p-4 flex">
                {smallImages.map((src) => 
                    (<img src = {src} alt="No Image Available" className = "w-20 h-20 bg-gray-200 rounded mr-4"/>
                ))}
                </div>

            </div>
            <div className="flex items-center flex-col border-4 border-gray-200 h-screen w-1/2">   
 
            <div className="mt-4">상품명: </div>
            <div className="mt-4">상품 가격: </div>
            <div className="mt-4"> 상세 설명: </div>
            <div className="mt-4 mb-4"> 구매 수량: </div>
            <div className=""><Button label="장바구니에 담기"/></div>
            

        </div>
        </div>
    )
}


export default ItemDetailPage