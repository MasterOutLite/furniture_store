import React, {memo} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./page/Home/Home";
import MDFKitchens from "./page/MDFKitchens/MDFKitchens";
import NotFound from "./page/NotFound/NotFound";
import KitchenModern from "./page/KitchenModern/KitchenModern";
import KitchenNaturalWood from "./page/KitchenNaturalWood/KitchenNaturalWood";
import KitchenProfileMDF from "./page/KitchenProfileMDF/KitchenProfileMDF";
import WardrobesClassic from "./page/WardrobesClassic/WardrobesClassic";
import WardrobesModern from "./page/WardrobesModern/WardrobesModern";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/MDFKitchens',
    element: <MDFKitchens />,
  }, {
    path: '/KitchenModern',
    element: <KitchenModern />,
  }, {
    path: '/KitchenNaturalWood',
    element: <KitchenNaturalWood />,
  },{
    path: '/KitchenProfileMDF',
    element: <KitchenProfileMDF />,
  },{
    path: '/WardrobesClassic',
    element: <WardrobesClassic />,
  },{
    path: '/WardrobesModern',
    element: <WardrobesModern />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}
export default memo(Routes);
