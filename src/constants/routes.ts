export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  CHECKOUT: "/checkout",
  PRODUCT: (id: number) => "/product/" + id,
  WISHLIST: "/wishlist",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: {
    ROOT: "/dashboard/profile",
    ORDERS: "/dashboard/orders",
  },
};
