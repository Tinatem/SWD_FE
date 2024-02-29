import OrderCard from "./OrderCard";
import { useAppSelector } from "@/hooks/useStore";

export default function NotProccessList() {

    const { orderList } = useAppSelector(state => state.orderList);

    return (
        <div className="w-full mt-4">
            <div className="p-2 space-y-4">
                {orderList.map((order, index) => (
                    <OrderCard key={index} order={order} />
                ))}
            </div>
        </div>
    )
}