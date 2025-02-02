import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TReouteItems = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TReouteItems[];
};
const adminRouteGeneretor = (items: TReouteItems[]) => {
  const adminRoutes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.name && item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return adminRoutes;
};
export default adminRouteGeneretor;
