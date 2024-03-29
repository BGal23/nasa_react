import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { fetchData } from "./redux/operations";
import "./App.css";
import changeDate from "./redux/changeDate";
const MenuBar = lazy(() => import("./components/MenuBar/MenuBar"));
const Home = lazy(() => import("./pages/Home"));
const Creator = lazy(() => import("./pages/Creator"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Loader = lazy(() => import("./components/Loader/Loader"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const today = changeDate(new Date());
    dispatch(fetchData({ date: today, isNextPage: false }));
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MenuBar />}>
            <Route index element={<Home />} />
            <Route path="creator" element={<Creator />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
