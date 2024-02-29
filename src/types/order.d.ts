export type Order = {
  id: string;
  name: string;
  weight: number;
  address: string;
  fromStationAddress: string;
  toStationAddress: string;
  status: "Đang đợi vận chuyển" | "Đang vận chuyển" | "Đã giao hàng" | "Đã hủy";
  totalPrice: number;
  image: string;
  orderDate?: Date;
  note?: string;
  productQuantity?: number;
  busName?: string;
  //Order Place, Peding, Processing, Delivered
  orderStage?: OrderStage[];
};

export type OrderStage = {
  time: Date;
  checked: boolean;
  status: "Order Place" | "Pending" | "Processing" | "Delivered";
};
