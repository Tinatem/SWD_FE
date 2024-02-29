import { useParams } from "react-router-dom";
import { useAppSelector } from "@/hooks/useStore";
import orderImage from "@/assets/images/orderImage.png";
import { formatDateTime } from "@/lib/formatTime";
import { formatPrice } from "@/lib/formatPrice";

export default function OrderDetails() {
    const { orderList } = useAppSelector((state) => state.orderList);
    const id = useParams<{ id: string }>().id;
    const order = orderList.find((order) => order.id === id);

    return (
        <div className="w-full px-6 pt-6">
            <div className=" w-full p-6 bg-[#eaf4fa] grid grid-cols-3 gap-6 rounded-md">
                <div className="col-span-1 space-y-4">
                    <div className="flex justify-center items-center p-6 bg-white max-h-56 object-cover rounded-md">
                        <img src={orderImage} alt={order?.name} />
                    </div>
                    <div className="w-full">
                        {order?.orderStage?.map((stage, index) => (
                            <div key={index} className="grid grid-cols-3">
                                <div className="text-sm font-normal col-span-1 text-right">
                                    {stage.time.toLocaleTimeString("en-US", {
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}
                                </div>
                                {stage.checked ? (
                                    <div className="text-sm font-semibold col-span-1 text-center">✅</div>
                                ) : (
                                    <div className="text-sm font-semibold col-span-1 text-center">⏳</div>
                                )}
                                <div className="text-sm font-semibold col-span-1">
                                    {stage.status}
                                </div>
                                {index !== (order.orderStage?.length ?? 0) - 1 && (
                                    <div className="col-span-3 text-center text-sm">
                                        |
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-2 space-y-3 relative">
                    <div className="font-semibold text-lg  text-[#50a4b8]">
                        Mã đơn hàng: {order?.id}
                    </div>
                    <div className='font-semibold text-sm col-span-1 truncate'>
                        Khối lượng: <span className='text-sm font-normal'>{order?.weight} kg</span>
                    </div>
                    <div className='font-semibold text-sm'>
                        Địa chỉ: <span className='text-sm font-normal truncate'>{order?.address}</span>
                    </div>
                    <div className='font-semibold text-sm'>
                        Từ trạm: <span className='text-sm font-normal truncate'>{order?.fromStationAddress}</span>
                    </div>
                    <div className='font-semibold text-sm'>
                        Đến Trạm: <span className='text-sm font-normal truncate'>{order?.toStationAddress}</span>
                    </div>
                    <div className='font-semibold text-sm'>
                        Thời gian đặt: <span className='text-sm font-normal truncate'>{formatDateTime(order?.orderDate)}</span>
                    </div>
                    <div className='font-semibold text-sm'>
                        Ghi chú: <span className='text-sm font-normal truncate'>{order?.note}</span>
                    </div>
                    <div className='font-semibold text-sm'>
                        Số lượng sản phẩm: <span className='text-sm font-normal truncate'>{order?.productQuantity}</span>
                    </div>
                    <div className='font-semibold text-sm'>
                        Bus: <span className='text-sm font-normal truncate'>{order?.busName}</span>
                    </div>
                    <div className="absolute bottom-0 right-0 flex flex-col items-center justify-center gap-3">
                        <div className="flex justify-center items-center text-base text-blue-500 border-2 border-blue-500 rounded-full px-4 py-2">
                            {order?.status}
                        </div>
                        <div className='row-span-1 text-lg font-semibold text-red-500'>
                            Tổng tiền: {formatPrice(order?.totalPrice || 0)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}