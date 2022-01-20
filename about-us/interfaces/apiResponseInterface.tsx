export interface apiResponseProps {
  _id: string;
  sellerStore: string;
  externalOrderNumber: string;
  buyerFullName: string;
  buyerFullNumber: string;
  buyerFullEmail: string;
  shippingMethod: string;
  shippingAddress: string;
  shippingCity: string;
  shippingRegion: string;
  shippingCountry: string;
  creationDate: string;
  internalOrderNumber: string;
  pack_promise_min: string;
  pack_promise_max: string;
  ship_promise_min: string;
  ship_promise_max: string;
  delivery_promise_min: string;
  delivery_promise_max: string;
  ready_pickup_promise_min: string;
  ready_pickup_promise_max: string;
  lineItems: {
    productName: string;
    productQuantity: string;
    productWeight: string;
  }[];
}
