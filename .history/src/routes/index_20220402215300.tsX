const routes = {
  path: "/",
  element: <SecurityLayout />,
  children: [
    { path: "", element: <Navigate to="/user/login" /> }, // Redirect 重定向！
    {
      path: "",
      element: <BasicLayout />,
      children: [
        // BasicLayout 业务页面
        {
          path: "index1",
          element: <Index1 />,
        },
        {
          path: "index2",
          element: <Index2 />,
        },
      ],
    },
  ],
};
function RenderRoutes() {
  const element = useRoutes(routes);
  return element;
}
