export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  PRODUCT: (id: number) => "/product/" + id,
  WISHLIST: "/wishlist",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: {
    ROOT: "/dashboard/profile",
  },
};
